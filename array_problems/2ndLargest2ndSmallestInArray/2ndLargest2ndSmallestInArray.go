package main
import "fmt"
type ArrayProblems struct{}

func (ap *ArrayProblems) arrFunc(array []int) []int {
    for i := 0; i < len(array); i++ {
        for j := 0; j < len(array); j++ {
            if array[i] < array[j] {
                 temp := array[i]
                 array[i] = array[j]
                 array[j] = temp
            }
        }
    }
    min := array[1]
    max := array[len(array) - 2]
    result := []int{ min, max }
	return result
}

func main() {
    arrayProblems := ArrayProblems{}
    secondIndex := arrayProblems.arrFunc([]int { 5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4 })
    fmt.Println("secondMin:", secondIndex[0])
    fmt.Println("secondMax:", secondIndex[1])
}