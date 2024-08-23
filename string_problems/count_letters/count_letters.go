package main

import (
	"fmt"
)

type StringProblems struct{}

func (sp *StringProblems) count_letters(str string) map[string]int {
	countAlphabets := make(map[string]int)
	for _, char := range str {
		if char >= 'a' && char <= 'z' {
			charStr := string(char)
		    countAlphabets[charStr]++
		}
	}
	return countAlphabets
}

func main()  {
	string_problems := StringProblems{}
	response := string_problems.count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files.")
	fmt.Println(response)
}