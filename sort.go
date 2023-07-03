package main

import (
	"fmt"
	"sync"
)

type Sort struct{}

func (s *Sort) Quick(items []int) []int {
	list := make([]int, len(items))
	copy(list, items)
	if len(list) < 2 {
		return list
	}
	pivot := list[0]
	smaller := make([]int, 0)
	bigger := make([]int, 0)
	for _, item := range list[1:] {
		if item < pivot {
			smaller = append(smaller, item)
		} else {
			bigger = append(bigger, item)
		}
	}
	return append(append(s.Quick(smaller), pivot), s.Quick(bigger)...)
}

func (s *Sort) Bubble(items []int) []int {
	length := len(items)
	for passover := 0; passover < length; passover++ {
		for index := 0; index < length-passover-1; index++ {
			if items[index] > items[index+1] {
				items[index], items[index+1] = items[index+1], items[index]
			}
		}
	}
	return items
}

func (s *Sort) Select(items []int) []int {
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

func (s *Sort) Insert(items []int) []int {
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

func (s *Sort) Simple(items []int) []int {
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

func (s *Sort) MergeSort(items []int) []int {
	length := len(items)
	if length <= 1 {
		return items
	}
	middle := length / 2
	left := s.MergeSort(items[:middle])
	right := s.MergeSort(items[middle:])
	return s.merge(left, right)
}

func (s *Sort) merge(left, right []int) []int {
	merged := make([]int, 0)
	leftIndex := 0
	rightIndex := 0
	for leftIndex < len(left) && rightIndex < len(right) {
		if left[leftIndex] < right[rightIndex] {
			merged = append(merged, left[leftIndex])
			leftIndex++
		} else {
			merged = append(merged, right[rightIndex])
			rightIndex++
		}
	}
	for leftIndex < len(left) {
		merged = append(merged, left[leftIndex])
		leftIndex++
	}
	for rightIndex < len(right) {
		merged = append(merged, right[rightIndex])
		rightIndex++
	}
	return merged
}

func main() {
	arr := []int{0, 43, 3, 2, 3, 4}
	sort := Sort{}

	wg := sync.WaitGroup{}
	wg.Add(6)

	go func() {
		defer wg.Done()
		quickSort := sort.Quick(arr)
		fmt.Println("quick sort:", quickSort)
	}()

	go func() {
		defer wg.Done()
		selectSort := sort.Select(arr)
		fmt.Println("select sort:", selectSort)
	}()

	go func() {
		defer wg.Done()
		insertSort := sort.Insert(arr)
		fmt.Println("insert sort:", insertSort)
	}()

	go func() {
		defer wg.Done()
		bubbleSort := sort.Bubble(arr)
		fmt.Println("bubble sort:", bubbleSort)
	}()

	go func() {
		defer wg.Done()
		simpleSort := sort.Simple(arr)
		fmt.Println("simple sort:", simpleSort)
	}()

	go func() {
		defer wg.Done()
		mergeSort := sort.MergeSort(arr)
		fmt.Println("merge sort:", mergeSort)
	}()

	wg.Wait()
}
