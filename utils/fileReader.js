const fs = require('fs');
const readline = require('readline');
const getInputFile = require('./args');

const getInputFileContent = async () => {
  const fileContent = []
  
  try {
      const file = getInputFile
      const fileStream = fs.createReadStream(file);
      const lines = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      
      for await (const line of lines) {
        const [name, value] = line.split(":")

        fileContent.push(name.split(" ")[0])
        fileContent.push(value)
      }
      
  } catch(err) {
    throw err
  }

  return fileContent
}


module.exports = getInputFileContent