package main

import "fmt"

type ArrayProblems struct {
    arr []int
}

func NewArrayProblems(arr []int) *ArrayProblems {
    return &ArrayProblems{arr: copyArray(arr)}
}

func (ap *ArrayProblems) Quick(items []int) []int {
	if items == nil {
		items = copyArray(ap.arr)
	}
	if len(items) < 2 {
		return items
	}
	pivot := items[0]
	var smaller []int
	var bigger []int
	var equal []int
	for _, item := range items {
		if item < pivot {
			smaller = append(smaller, item)
		} else if item > pivot {
			bigger = append(bigger, item)
		} else {
			equal = append(equal, item)
		}
	}
	return append(append(ap.Quick(smaller), equal...), ap.Quick(bigger)...)
}

func (ap *ArrayProblems) Bubble(items []int) []int {
	if items == nil {
		items = copyArray(ap.arr)
	}
	length := len(items)
	for passover := 0; passover < length; passover++ {
		for index := 0; index < length-1; index++ {
			if items[index] > items[index+1] {
				items[index], items[index+1] = items[index+1], items[index]
			}
		}
	}
	return items
}

func (ap *ArrayProblems) Select(items []int) []int {
	if items == nil {
		items = copyArray(ap.arr)
	}
	length := len(items)
	for passes := 0; passes < length; passes++ {
			min := passes
			for i := passes; i < length; i++ {
					if items[i] < items[min] {
							min = i
					}
			}
			if min != passes {
					items[passes], items[min] = items[min], items[passes]
			}
	}
	return items
}

func (ap *ArrayProblems) Insert(items []int) []int {
	if items == nil {
			items = copyArray(ap.arr)
	}
	length := len(items)
	for i := 1; i < length; i++ {
			index := i - 1
			temporary := items[i]
			for index >= 0 && items[index] > temporary {
				items[index+1] = items[index]
				index--
			}
			items[index+1] = temporary
	}
	return items
}

func (ap *ArrayProblems) Simple(items []int) []int {
	if items == nil {
		items = copyArray(ap.arr)
	}
	length := len(items)
	for i := 0; i < length; i++ {
		for j := 0; j < length; j++ {
			if items[i] < items[j] {
				items[i], items[j] = items[j], items[i]
			}
		}
	}
	return items
}

func (ap *ArrayProblems) MergeSort(items []int) []int {
	if items == nil {
		items = copyArray(ap.arr)
	}
	if len(items) <= 1 {
		return items
	}
	middle := len(items) / 2
	left := ap.MergeSort(items[:middle])
	right := ap.MergeSort(items[middle:])
	return ap.Merge(left, right)
}

func (ap *ArrayProblems) Merge(left, right []int) []int {
	merged := []int{}
	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			merged = append(merged, left[0])
			left = left[1:]
		} else {
			merged = append(merged, right[0])
			right = right[1:]
		}
	}
	merged = append(merged, left...)
	merged = append(merged, right...)
	return merged
}

func copyArray(arr []int) []int {
	newArr := make([]int, len(arr))
	copy(newArr, arr)
	return newArr
}

func main() {
	arr := []int{0, 43, 3, 2, 3, 4, 6}
	sort := NewArrayProblems(arr)

	quickSort := sort.Quick(nil)
	selectSort := sort.Select(nil)
	insertSort := sort.Insert(nil)
	bubbleSort := sort.Bubble(nil)
	simpleSort := sort.Simple(nil)
	mergeSort := sort.MergeSort(nil)

	fmt.Println("quick sort:", quickSort)
	fmt.Println("select sort:", selectSort)
	fmt.Println("insert sort:", insertSort)
	fmt.Println("bubble sort:", bubbleSort)
	fmt.Println("simple sort:", simpleSort)
	fmt.Println("merge sort:", mergeSort)
}
