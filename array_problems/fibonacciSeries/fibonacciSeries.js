class ArrayProblems {
    async fibonacciSeries(n) {
        try {
            let fib = [0, 1]
            for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2])
            return fib
        } catch (error) {
            console.log("Error occurred while finding fibonacci series", error)
        }
    }
}
const array_problems = new ArrayProblems()
array_problems.fibonacciSeries(10)
    .then(fibonacciSeries => console.log(fibonacciSeries))
    .catch((err) => console.log("Error accrued while finding fibonacci series", err))

// time complexity: O(n)
// space complexity: O(n)
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]