const { isValidPlateau } = require("../utils/utils")

plateauInstance = null

class Plateau {
    
    #startPoint = {x:0, y:0}
    #endPoint = {x:0, y:0}

    constructor(x, y) {
        if(!isValidPlateau(x, y)) {
            throw "Plateau size is too small for a rover to land on it"
        }
        this.#endPoint.x = x
        this.#endPoint.y = y
    }

    // Making it read only by using Object.freeze
    getPlateauSize() {
        return Object.freeze(this.#endPoint)
    }
}


function getPlateauInstance(x, y) {
    if(!plateauInstance) {
        plateauInstance = new Plateau(+x, +y)
    }
    return plateauInstance
}

function isPlateauInstance(plateau) {
    return plateau instanceof Plateau
}

module.exports = {
    getPlateauInstance,
    isPlateauInstance
}