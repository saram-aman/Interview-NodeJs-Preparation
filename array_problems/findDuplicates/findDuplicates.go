package main
import (
    "fmt"
    "sort"
    )
type ArrayProblems struct{}
func (ap *ArrayProblems) findDuplicates(arr []int) []int {
    count := make(map[int]int)
    result := []int{}
    for i := 0; i < len(arr); i++ {
        val := arr[i]
        if _, ok := count[val]; !ok {
            count[val] = 1
        } else {
            count[val]++
            if count[val] == 2 {
                result = append(result, val)
            }
        }
    }
    sort.Ints(result)
    return result
}

func main(){
    array_problems := ArrayProblems{}
    duplicates := array_problems.findDuplicates([]int { 12,34,67,89,54,43,12,34,56,78,98,13,64 })
    fmt.Println(duplicates)
}