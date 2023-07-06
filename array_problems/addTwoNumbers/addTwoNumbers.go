package main
import (
    "fmt"
    "strings"
    "strconv"
)
type ArrayProblems struct{}

func (ap *ArrayProblems) addTwoNumbers(arr1, arr2 []int) []int {
    str1 := strings.Replace(strings.Trim(fmt.Sprint(arr1), "[]"), " ", "", -1)
    str2 := strings.Replace(strings.Trim(fmt.Sprint(arr2), "[]"), " ", "", -1)
    sum := strconv.Itoa(ap.parseInt(str1) + ap.parseInt(str2))
    reversed := ap.reverseStr(sum)
    numArray := strings.Split(reversed, "")
    result := make([]int, len(numArray))
    for i, numStr := range numArray {
        result[i] = ap.parseInt(numStr)
    }
    return result
}

func (ap *ArrayProblems) reverseStr(str string) string {
    runes := []rune(str)
    for i, j := 0, len(runes) - 1; i < j; i, j =  i + 1, j - 1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}
func (ap *ArrayProblems) parseInt(str string) int {
    num, _ := strconv.Atoi(str)
    return num
}

func main() {
    arrayProblems := ArrayProblems{}
    arr1 := []int{ 9,9,9,9,9,9,9 }
    arr2 := []int{ 9,9,9,9 }
    addedNumbers := arrayProblems.addTwoNumbers(arr1, arr2) 
    fmt.Println(addedNumbers)
}