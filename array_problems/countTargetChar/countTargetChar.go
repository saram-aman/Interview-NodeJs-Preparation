package main
import (
    "fmt"
    "strings"
)
type ArrayProblems struct{}
func (ap *ArrayProblems) CountTargetChar(str string, targetChar rune) int {
    result := []int{}
    str = strings.ToUpper(string(str))
    if len(str) == 0 {
        return 0;
    }
    for _, ch := range str {
        if(ch == targetChar || ch == targetChar-'a'+'A') {
            result = append(result, int(ch))
        }
    }
    return len(result)
}

func main() {
    arrayProblems := ArrayProblems{}
    numberChar := arrayProblems.CountTargetChar("Hello world, this is very basic for developers", 'S')
    fmt.Println(numberChar)
}