package main
import ("fmt")
type ArrayProblems struct{}

func (ap *ArrayProblems) commonInTwoArray(arr1 []int, arr2 []int) []int {
    commons := []int{}
    for _, num := range arr1 {
        if contains(arr2, num) {
            commons = append(commons, num)
        }
    }
    return commons
}
func contains(slice []int, num int) bool {
    for _, n := range slice {
        if n == num {
            return true
        }
    }
    return false
}

func main() {
    arrayProblems := ArrayProblems{}
    arr1 := []int{1, 2, 5, 8, 10, 11, 13, 15}
    arr2 := []int{1, 12, 3, 14, 5, 6, 7, 8, 9, 10}
    found_commons := arrayProblems.commonInTwoArray(arr1, arr2)
    fmt.Println(found_commons)
}