package main
import (
    "fmt"
    "math"
)
type ArrayProblems struct{}
func (ap *ArrayProblems) createSpiralMatrix(n int) [][]int {
    numRows := n
    arr := []int{}
    arrSize := numRows * numRows
    for i := 0; i < arrSize; i++ {
        arr = append(arr, i)
    }
    numCols := int(math.Ceil(float64(len(arr)) / float64(numRows)))
    matrix := make([][]int, numRows)
    for i := range matrix {
        matrix[i] = make([]int, numCols)
    }
    topRow := 0
    leftCol := 0
    bottomRow := numRows - 1
    rightCol := numCols - 1
    index := 0
    for topRow <= bottomRow && leftCol <= rightCol {
        for col := leftCol; col <= rightCol; col++ {
            matrix[topRow][col] = arr[index]
            index++
        }
        topRow++
        for row := topRow; row <= bottomRow; row++ {
            matrix[row][rightCol] = arr[index]
            index++
        }
        rightCol--
        if topRow <= bottomRow {
            for col := rightCol; col >= leftCol; col-- {
                matrix[bottomRow][col] = arr[index]
                index++
            }
            bottomRow--
        }
        if leftCol <= rightCol {
            for row := bottomRow; row >= topRow; row-- {
                matrix[row][topRow] = arr[index]
                index++
            }
            leftCol++
        }
    }
    return matrix
}

func main()  {
    array_problems := ArrayProblems{}
    spiralMatrix := array_problems.createSpiralMatrix(5)
    for _, row := range spiralMatrix {
        fmt.Println(row)
    }
}