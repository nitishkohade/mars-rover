const {getPlateauInstance} = require('./plateau/plateau')
const LandingRover = require('./rover/landingRover')
const readFile = require('./utils/fileReader')
const { getPlateauData, getRoverCurrentPosition, getRoverFinalPositionInWords } = require('./utils/utils')


const navigateRover = async () => {
    try{
        const fileContent = await readFile()

        if(fileContent.length < 3) {
            throw "file content does't have the required content" 
        }

        const [x, y] = getPlateauData(fileContent[1])
        var plateau = getPlateauInstance(x, y)

        const len = fileContent.length

        for(let i=2; i < len;) {
            try{
                const name = fileContent[i]
                const [x, y, direction] = getRoverCurrentPosition(fileContent[i+1])
                var rover = new LandingRover(name, {x, y, direction}, plateau)
                rover.feedInstruction(fileContent[i+3])

                console.log(rover.getRoverLastPosition())
            
            } finally{
                i = i + 4
            }
        }
        
    } catch(error) {
        console.log(error)
    }
}

navigateRover()