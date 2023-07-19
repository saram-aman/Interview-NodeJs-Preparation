package main
import "fmt"
type ArrayProblems struct{}
func (ap *ArrayProblems) equilibriumIndex(arr []int) int {
    n := len(arr)
    if n == 0 {
        return -1
    }
    totalSum := 0
    for _, val := range arr {
        totalSum += val
    }
    leftSum := 0;
    for i, val := range arr {
        totalSum -= val
        if leftSum == totalSum {
            return i
        }
        leftSum += val
    }
    return -1
}
func main() {
    array_problems := ArrayProblems{}
    equilibriumIndex := array_problems.equilibriumIndex([]int {-7, 1, 5, 2, -4, 3, 0})
    fmt.Println(equilibriumIndex)
}