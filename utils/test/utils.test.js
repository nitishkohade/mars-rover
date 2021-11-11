const { plateau_data_error, rover_position_error, rover_instruction_error } = require("../../constant");
const { isValidPlateau,
    getPlateauData,
    getRoverCurrentPosition,
    getRoverInstruction,
    isRoverCurrentPositionValid
} = require("../utils");

describe('isValidPlateau', () => {
    test("if x and y are not integer return false", () => {
        const isValid = isValidPlateau('a', 'b')
        expect(isValid).toBe(false)
    })

    test("if x and y are integer return true", () => {
        const isValid = isValidPlateau(2, 2)
        expect(isValid).toBe(true)
    })

    test("if x and y are integer but less that 0 return false", () => {
        const isValid = isValidPlateau(-1,-1)
        expect(isValid).toBe(false)
    })
})

describe('getPlateauData', () => {
    test("if the data is null", () => {
        try{
            getPlateauData(null)
        } catch(err) {
            expect(err).toBe(plateau_data_error)
        }
    })

    test("if the data is not null", () => {
        const data = getPlateauData("5 5")
        expect(data).toStrictEqual(["5", "5"])
    })
})

describe('getRoverCurrentPosition', () => {
    test("if the data is null", () => {
        try{
            getRoverCurrentPosition(null)
        } catch(err) {
            expect(err).toBe(rover_position_error)
        }
    })

    test("if the data is not null", () => {
        const data = getPlateauData("5 5 W")
        expect(data).toStrictEqual(["5", "5", "W"])
    })
})

describe('getRoverInstruction', () => {
    test("if the data is null", () => {
        try{
            getRoverInstruction(null)
        } catch(err) {
            expect(err).toBe(rover_instruction_error)
        }
    })

    test("if the data is not null", () => {
        const data = getRoverInstruction("LMRM")
        expect(data).toBe("LMRM")
    })
})

describe('isRoverCurrentPositionValid', () => {
    test("if current position x is not a number return false", () => {
        const isValid = isRoverCurrentPositionValid({x:"x", y:3, direction:"W"})
        expect(isValid).toBe(false)
    })

    test("if current position y is not a number return false", () => {
        const isValid = isRoverCurrentPositionValid({x:3, y:"n", direction:"W"})
        expect(isValid).toBe(false)
    })

    test("if current direction is not a valid comapass direction return false", () => {
        const isValid = isRoverCurrentPositionValid({x:3, y:3, direction:"R"})
        expect(isValid).toBe(false)
    })

    test("if current position is valid return true", () => {
        const isValid = isRoverCurrentPositionValid({x:3, y:3, direction:"W"})
        expect(isValid).toBe(true)
    })
})