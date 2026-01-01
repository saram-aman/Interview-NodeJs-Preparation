class arrayProblems {
    constructor(arr) {
        this.arr = arr
    }
    findPrime() {
        return this.arr.filter((num) => {
            if (num === 1) return false
            for (let i = 2; i < num; i++) {
                if (num % i === 0) return false
            }
            return true
        })
    }
}
const arr_problems = new arrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(arr_problems.findPrime())