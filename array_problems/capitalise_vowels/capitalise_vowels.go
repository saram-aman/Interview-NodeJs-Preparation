package main
import (
     "fmt"
     "strings"
     )
type ArrayProblems struct{}

func (ap *ArrayProblems) capitalise_vowels(str string) string {
     vowels := []rune{ 'a', 'e', 'i', 'o', 'u' }
     res := ""
     for _, currentChar := range str {
         if contains(vowels, currentChar) {
             uppercase := strings.ToUpper(string(currentChar))
             res += uppercase
         } else {
             res += string(currentChar)
         }
     }
     return res
}

func contains(slice []rune, char rune) bool {
    for _, c := range slice {
        if c == char {
            return true
        }
    }
    return false
}

func main() {
    arrayProblems := ArrayProblems{}
    str := "We can also traverse the array elements using foreach loop. It returns array element one by one"
    capitalised_vowels := arrayProblems.capitalise_vowels(str)
    fmt.Println(capitalised_vowels)
}