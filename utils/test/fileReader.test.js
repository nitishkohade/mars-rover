const getInputFileContent = require("../fileReader");

// jest.mock('../args', () => {
//     const originalModule = jest.requireActual('../args');

//     return './dummy.txt'
// })

test("testing for input file content", async () => {
    const fileContent = await getInputFileContent()
    expect(fileContent[0]).toBe("Plateau")
})
