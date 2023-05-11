function createSpiralMatrix(n) {
    let numRows = n
    let arr = []
    let arrSize = numRows * numRows
    for(let k = 1; k <= arrSize; k++){
        arr.push(k)
    }
    const numCols = Math.ceil(arr.length / numRows)
    const matrix = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        matrix[i] = new Array(numCols).fill(0)
    }
    let topRow = 0
    let leftCol = 0
    let bottomRow = numRows - 1
    let rightCol = numCols - 1
    let index = 0
    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let col = leftCol; col <= rightCol; col++) {
            matrix[topRow][col] = arr[index++]
        }
        topRow++
        for (let row = topRow; row <= bottomRow; row++) {
            matrix[row][rightCol] = arr[index++]
        }
        rightCol--
        if (topRow <= bottomRow) {
            for (let col = rightCol; col >= leftCol; col--) {
                matrix[bottomRow][col] = arr[index++]
            }
            bottomRow--
        }
        if (leftCol <= rightCol) {
            for (let row = bottomRow; row >= topRow; row--) {
                matrix[row][leftCol] = arr[index++]
            }
            leftCol++
        }
    }
    return matrix
}
const numRows = 5

const spiralMatrix = createSpiralMatrix(numRows)
console.count(spiralMatrix)
