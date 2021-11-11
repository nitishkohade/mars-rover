const { getPlateauInstance, isPlateauInstance } = require("./plateau");

describe("getPlateauInstance", () => {
    test("to check the plateau instance having similar values being passed", () => {
        const x = 2
        const y = 3
        const instance = getPlateauInstance(x,y)
        expect({x,y}).toStrictEqual(instance.getPlateauSize())
    })

    test("to check the plateau instance for singleton", () => {
        const x = 2
        const y = 3
        const instance1 = getPlateauInstance(x,y)
        const instance2 = getPlateauInstance(x,y)
        expect(instance1).toBe(instance2)
    })

})

describe("isPlateauInstance", () => {
    test("return true if plateau instance is Plateau", () => {
        const x = 2
        const y = 3
        const instance = getPlateauInstance(x,y)
        expect(isPlateauInstance(instance)).toStrictEqual(true)
    })

    test("return false if plateau instance is not Plateau", () => {
        expect(isPlateauInstance("")).toStrictEqual(false)
    })

})