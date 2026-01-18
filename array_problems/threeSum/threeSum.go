package main
import "fmt"

type ArrayProblems struct {
	arr []int
}

func NewArrayProblems(arr []int) *ArrayProblems {
	return &ArrayProblems{arr: copyArray(arr)}
}

func copyArray(arr []int) []int {
	copy := make([]int, len(arr))
	copy(copy, arr)
	return copy
}

func (ap *ArrayProblems) SetArr(arr []int) {
	ap.arr = copyArray(arr)
}
func (ap *ArrayProblems) ThreeSum() [][]int {
	result := [][]int{}
	n := len(ap.arr)
	if n < 3 {
		return result
	}
	sort.Ints(ap.arr)
	for i := 0; i < n-2; i++ {
		if i > 0 && ap.arr[i] == ap.arr[i-1] {
			continue
		}
		left, right := i+1, n-1
		for left < right {
			sum := ap.arr[i] + ap.arr[left] + ap.arr[right]
			if sum == 0 {
				result = append(result, []int{ap.arr[i], ap.arr[left], ap.arr[right]})
				for left < right && ap.arr[left] == ap.arr[left+1] {
					left++
				}
				for left < right && ap.arr[right] == ap.arr[right-1] {
					right--
				}
				left++
				right--
			} else if sum < 0 {
				left++
			} else {
				right--
			}
		}
	}
	return result
}
func main() {
	arrProblems := NewArrayProblems([]int{})
	arrProblems.SetArr([]int{-1, 0, 1, 2, -1, -4})
	fmt.Println("Three Sum Solution: ", arrProblems.ThreeSum())
}