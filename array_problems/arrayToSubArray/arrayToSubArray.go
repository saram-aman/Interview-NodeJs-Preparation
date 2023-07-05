package main
import (
    "fmt" 
    "math"
)
type ArrayProblems struct{}
func (ap *ArrayProblems) arrayToSubArray(arr []int, size int) [][]int {
    size = int(math.Ceil(float64(len(arr)) / float64(size)))
    result := [][]int{}
    for i := 0; i < len(arr); i += size {
        end := i + size
        if end > len(arr) {
            end = len(arr)
        }
        result = append(result, arr[i:end])
    }
    return result
}

func main() {
    array_problems := ArrayProblems{}
    subArrays := array_problems.arrayToSubArray([]int{ 5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4 }, 5)
    fmt.Println(subArrays)
}