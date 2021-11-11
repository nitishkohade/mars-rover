const LandingRover = require("./landingRover");
const {getPlateauInstance} = require('../plateau/plateau');
const { rover_plateau_error, rover_error } = require("../constant");

describe("LandingRover", () => {
    test("successfully create landing rover instance", () => {
        const x = 2
        const y = 2
        const direction = "W"
        const plateau = getPlateauInstance(5,5)
        var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
        expect(rover.getRoverLastPosition()).toBe("Rover1:2 2 W")
    })

    test("if plateau is not real throw error", () => {
        try{
            const x = 2
            const y = 2
            const direction = "W"
            var rover = new LandingRover("Rover1", {x, y, direction}, "")
            expect(rover.getRoverLastPosition()).toBe("Rover1:2 2 W")
        } catch(err) {
            expect(err).toBe(rover_plateau_error)
        }
    })

    test("if rover current position is not correct throw error", () => {
        try{
            const x = 'w'
            const y = 2
            const direction = "W"
            const plateau = getPlateauInstance(5,5)
            var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
            expect(rover.getRoverLastPosition()).toBe("Rover1:2 2 W")
        } catch(err) {
            expect(err).toBe(rover_error)
        }
    })

    test("get the correct rover's position", () => {
        const x = 2
        const y = 2
        const direction = "W"
        const plateau = getPlateauInstance(5,5)
        var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
        
        rover.feedInstruction("LM")
        
        expect(rover.getRoverLastPosition()).toBe("Rover1:2 1 S")
    })

    test("get the correct rover's position with more orientation", () => {
        const x = 2
        const y = 2
        const direction = "W"
        const plateau = getPlateauInstance(5,5)
        var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
        
        rover.feedInstruction("LMLMLMLMLMLMLM")
        
        expect(rover.getRoverLastPosition()).toBe("Rover1:3 2 N")
    })

    test("the instruction is not valid", () => {
        try{
            const x = 2
            const y = 2
            const direction = "W"
            const plateau = getPlateauInstance(5,5)
            var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
            
            rover.feedInstruction(null)
            
        } catch(err) {
            expect(err).toBe("instruction is not valid")
        }
    })

    test("the instruction is not valid string format", () => {
        try{
            const x = 2
            const y = 2
            const direction = "W"
            const plateau = getPlateauInstance(5,5)
            var rover = new LandingRover("Rover1", {x, y, direction}, plateau)
            
            rover.feedInstruction({})
            
        } catch(err) {
            expect(err).toBe("instruction is not valid")
        }
    })
})