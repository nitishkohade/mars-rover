const getInputFile = (() => {
    // By default input text file will be read if txt file is not provided
    let file = './inputTest.txt'
    
    try{
        process.argv.forEach((val, index) => {
            if (index === 2 && val !== "--coverage") {
                file = val
            }
        });
    } catch(err) {
        throw err
    }
    return file
})()

module.exports = getInputFile