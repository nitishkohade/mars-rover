const { plateau_data_error, rover_position_error, rover_instruction_error } = require("../constant")

const isValidPlateau = (x, y) => {
    if(isNaN(+x) || isNaN(+y) || x<0 || y<0){
        return false
    }
    return true
}

const getPlateauData = (line) => {
    if(!line) {
      throw plateau_data_error
    }
    return line.split(" ")
  }
  
const getRoverCurrentPosition = (line) => {
    if(!line) {
        throw rover_position_error
    }
    return line.split(" ")
}

const getRoverInstruction = (line) => {
    if(!line) {
        throw rover_instruction_error
    }
    return line
}

const isRoverCurrentPositionValid = (currentPosition) => {
    const {x, y, direction} = currentPosition

    if(isNaN(+x) || isNaN(+y) || !(['W', 'N', 'E', 'S'].includes(direction.toUpperCase()))) {
        return false
    }

    return true
}

module.exports = {
    isValidPlateau,
    getPlateauData,
    getRoverCurrentPosition,
    getRoverInstruction,
    isRoverCurrentPositionValid
}