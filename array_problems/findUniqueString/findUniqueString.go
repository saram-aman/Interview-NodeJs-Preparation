package main

import (
	"fmt"
	"strings"
)

type ArrayProblems struct{}

func isQuniue(element string) bool {
	for _, el := range element {
		if strings.Count(element, string(el)) > 1 {
			return false
		}
	}
	return true
}

func (ap *ArrayProblems) findUniqueString(arr []string) []string {
	var response []string
	for i := 0; i < len(arr); i++ {
		element := arr[i]
		if isQuniue(element) {
			response = append(response, element)
		}
	}
	if len(response) > 0 {
		return response
	} else {
		return nil
	}
}

func main() {
	array_problems := ArrayProblems{}
	result := array_problems.findUniqueString([]string{"123456789", "434ffd", "asdfghjk", "43fdhnh", "wgcxhjny", "fsdf34"})
	fmt.Println(result)
}