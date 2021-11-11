const getInputFile = require("../args");

test("testing input file name when argument is passed to the command line", () => {
    const inputFile = getInputFile
    expect(inputFile).toBe('./inputTest.txt')
})
