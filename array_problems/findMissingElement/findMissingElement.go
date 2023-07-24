package main
import "fmt"
type ArrayProblems struct{}
func (ap *ArrayProblems) findMissingElement(arr []int) []int {
    missing := []int{}
    elements := make(map[int]bool)
    for _, num := range arr {
        elements[num] = true
    }
    for i := minOrMax(arr, "min"); i <= minOrMax(arr, "max"); i++ {
        if !elements[i] {
             missing = append(missing, i)
        }
    }
    return missing
}

func minOrMax(arr []int, digType string) int {
    if len(arr) == 0 {
        return 0
    }
    digit := arr[0]
    for _, num := range arr {
        if digType == "max" {
            if num > digit {
                digit = num
            }
        } else {
            if num < digit {
                digit = num
            }
        }
    }
    return digit
}

func main() {
    array_problems := ArrayProblems{}
    missing := array_problems.findMissingElement([]int {1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50})
    fmt.Println()
}