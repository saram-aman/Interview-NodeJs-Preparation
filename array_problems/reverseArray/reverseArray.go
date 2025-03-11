package main

import "fmt"

type ArrayProblem struct {
    arr []int
}

func NewArrayProblem(arr []int) *ArrayProblem {
    return &ArrayProblem{arr: arr}
}

func (ap *ArrayProblem) SetArr(arr []int) {
    ap.arr = arr
}

func (ap *ArrayProblem) ReverseArrA() []int {
	responseArr := []int{}
	for i := len(ap.arr) - 1; i >= 0; i-- {
		responseArr = append(responseArr, ap.arr[i])
	}
	return responseArr
}

func (ap *ArrayProblem) ReverseArrB() []int {
	start := 0
	end := len(ap.arr) - 1
	for start < end {
		ap.arr[start], ap.arr[end] = ap.arr[end], ap.arr[start]
		start++
		end--
	}
	return ap.arr
}

func main() {
	arrProblems := NewArrayProblem([]int{})
	arrProblems.SetArr([]int{0, 43, 3, 2, 3, 4})
	fmt.Println("Solution A: ", arrProblems.ReverseArrA())
	fmt.Println("Solution B: ", arrProblems.ReverseArrB())
}