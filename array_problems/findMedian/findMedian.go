package main
import (
    "fmt"
    "sort"
    "strconv"
    )
type ArrayProblems struct{}

func (ap *ArrayProblems) findMedian(arr1 []int, arr2 []int) string {
    merged := append(arr1, arr2...)
    sort.Ints(merged)
    midIndex := len(merged) / 2
    if len(merged) % 2 == 0 {
        return strconv.Itoa((merged[midIndex - 1] + merged[midIndex]) / 2)
    } else {
        return strconv.Itoa(merged[midIndex])
    }
}
func main() {
    array_problems := &ArrayProblems{}
    arr1 := []int{1,2,3,4,5}
    arr2 := []int{4,5,6,7,8}
    median := array_problems.findMedian(arr1, arr2)
    fmt.Println(median)
}