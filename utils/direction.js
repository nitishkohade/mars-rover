const { rover_rotation_error, rover_direction_error } = require("../constant")

const getDirectionByRotation = (direction, rotation) => {
    let finalDirection = null
    let currentRotation = rotation.toUpperCase()

    if(currentRotation !== 'L' && currentRotation !== 'R') {
        throw rover_rotation_error
    }

    switch(direction.toUpperCase()) {
        case 'W':
            finalDirection = currentRotation === 'L' ? 'S' : 'N'
            break;
        case 'N':
            finalDirection = currentRotation === 'L' ? 'W' : 'E'
            break;
        case 'E':
            finalDirection = currentRotation === 'L' ? 'N' : 'S'
            break;
        case 'S':
            finalDirection = currentRotation === 'L' ? 'E' : 'W'
    }

    if(!finalDirection) {
        throw rover_direction_error
    }

    return finalDirection
}

module.exports = getDirectionByRotation