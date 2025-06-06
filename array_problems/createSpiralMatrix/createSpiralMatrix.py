import math

class ArrayProblems:
    def createSpiralMatrix(self, n):
        numRows = n
        arr = [i for i in range(1, n*n + 1)]
        numCols = math.ceil(len(arr) / numRows)
        matrix = [[0 for _ in range(numCols)] for _ in range(numRows)]
        topRow = 0
        leftCol = 0
        bottomRow = numRows - 1
        rightCol = numCols - 1
        index = 0
        while topRow <= bottomRow and leftCol <= rightCol:
            col = leftCol
            while col <= rightCol:
                matrix[topRow][col] = arr[index]
                index += 1
                col += 1
            topRow += 1
            row = topRow
            while row <= bottomRow:
                matrix[row][rightCol] = arr[index]
                index += 1
                row += 1
            rightCol -= 1
            if topRow <= bottomRow:
                col = rightCol
                while col >= leftCol:
                    matrix[bottomRow][col] = arr[index]
                    index += 1
                    col -= 1
                bottomRow -= 1
            if leftCol <= rightCol:
                row = bottomRow
                while row >= topRow:
                    matrix[row][leftCol] = arr[index]
                    index += 1
                    row -= 1
                leftCol += 1
        return matrix


array_problems = ArrayProblems()
spiralMatrix = array_problems.createSpiralMatrix(5)
for rows in spiralMatrix:
    print(rows)