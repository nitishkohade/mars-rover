const { rover_plateau_error, rover_error } = require("../constant")
const { isPlateauInstance } = require("../plateau/plateau")
const getDirectionByRotation = require("../utils/direction")
const { isRoverCurrentPositionValid } = require("../utils/utils")

const setDirection = Symbol('setDirection')

class LandingRover {

    #roverName = 'Rover'
    #currentPosition = {x: -1, y: -1, direction: null}
    #plateau = null

    // plateau is required otherwise rover won't be able to land
    constructor(roverName, currentPosition, plateau) {
        if (!isPlateauInstance(plateau)) {
            throw rover_plateau_error
        }
        if (!isRoverCurrentPositionValid(currentPosition)) {
            throw rover_error
        }
        const {x, y, direction} = currentPosition
        this.roverName = roverName
        this.currentPosition = {x: +x, y: +y, direction: direction.toUpperCase()}
        this.plateau = plateau
    }

    // to get the latest position of the Rover
    // this is read only data
    getRoverLastPosition() {
        const {x, y, direction} = this.currentPosition
        return `${this.roverName}:${x} ${y} ${direction}`
    }

    // Set the direction of the rover (W,N,E,S)
    [setDirection](direction) {
        this.currentPosition.direction = direction.toUpperCase()
    }

    // This is when rover will move one step
    #move() {
        const endPoint = this.plateau.getPlateauSize()
        const maxHorizontal = endPoint.x
        const maxVertical = endPoint.y
        const x = this.currentPosition.x
        const y = this.currentPosition.y

        const direction = this.currentPosition.direction

        if(direction === 'W' && x > 0) {
            this.currentPosition.x = x - 1
        } else if(direction === 'N' && y < maxVertical) {
            this.currentPosition.y = y + 1
        } else if(direction === 'E' && x < maxHorizontal) {
            this.currentPosition.x = x + 1
        } else if(direction === 'S' && y > 0) {
            this.currentPosition.y = y - 1
        }
    }


    feedInstruction(instruction) {
        if(!instruction || typeof instruction !== 'string') {
            throw "instruction is not valid"
        }

        for(let i=0;instruction.length > i;i++) {
            const roverInstruction = instruction.charAt(i).toUpperCase()
            if(roverInstruction !== "M") {
                const {direction} = this.currentPosition
                const currentDirection = getDirectionByRotation(direction, roverInstruction)
                this[setDirection](currentDirection)
            } else if(roverInstruction === "M"){
                this.#move()
            }
        }
    }
}

module.exports = LandingRover