package main
import (
	"fmt"
)

type ArrayProblems struct{}

func (ap *ArrayProblems) binarySearch(arr []int, target int) int {
	left := 0
	right := len(arr) - 1
	for left <= right {
		mid := left + (right - left) / 2
		if arr[mid] == target {
			return mid
		} else if arr[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

func main () {
	array_problems := &ArrayProblems{}
	arr := []int{1, 3, 5, 7, 9}
	response := array_problems.binarySearch(arr, 5)
	fmt.Println(response)
}