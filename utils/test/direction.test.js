const { rover_rotation_error, rover_direction_error } = require("../../constant");
const getDirectionByRotation = require("../direction");

test("If rover's current direction is W and rotation being L or R then return S or N", () => {
    let finalDirection = getDirectionByRotation('w', 'l')
    expect(finalDirection).toBe('S')
    finalDirection = getDirectionByRotation('w', 'r')
    expect(finalDirection).toBe('N')
})

test("If rover's current direction is N and rotation being L or R then return W or E", () => {
    let finalDirection = getDirectionByRotation('n', 'l')
    expect(finalDirection).toBe('W')
    finalDirection = getDirectionByRotation('n', 'r')
    expect(finalDirection).toBe('E')
})

test("If rover's current direction is E and rotation being L or R then return N or S", () => {
    let finalDirection = getDirectionByRotation('e', 'l')
    expect(finalDirection).toBe('N')
    finalDirection = getDirectionByRotation('e', 'r')
    expect(finalDirection).toBe('S')
})

test("If rover's current direction is S and rotation being L or R then return E or W", () => {
    let finalDirection = getDirectionByRotation('s', 'l')
    expect(finalDirection).toBe('E')
    finalDirection = getDirectionByRotation('s', 'r')
    expect(finalDirection).toBe('W')
})

test("If rover's current rotation is not L or R then throw error", () => {
    try{
        getDirectionByRotation('s', 'q')
    } catch(err) {
        expect(err).toBe(rover_rotation_error)
    }
})

test("If rover's current rotation is not L or R then throw error", () => {
    try{
        getDirectionByRotation('h', 'l')
    } catch(err) {
        expect(err).toBe(rover_direction_error)
    }
})