package main
import "fmt"
type ArrayProblems struct{}
func (a *ArrayProblems) isPrime(number int) bool {
    if number < 0 {
        return false
    }
    for i := 2; i*i <= number; i++ {
        if number % i == 0 {
            return false
        }
    }
    return true
}

func (a *ArrayProblems) findPrime(array []int) []int {
    result := []int{}
    for _, num := range array {
        if a.isPrime(num) {
            result = append(result, num)
        }
    }
    return result
}

func main() {
    arrayProblems := ArrayProblems{}
    findPrime := arrayProblems.findPrime([]int{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 })
    fmt.Println(findPrime)
}