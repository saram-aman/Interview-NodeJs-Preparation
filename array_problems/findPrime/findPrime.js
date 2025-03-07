class arrayProblems {
    async findPrime(arr) {
        try {
            const primeNumbers = arr.filter((num) => {
                if (num === 1) return false
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) return false
                }
                return true
            })
            return primeNumbers
        } catch (err) {
            console.log('Error occurred while finding prime', err)
        }
    }
}
const arr_problems = new arrayProblems()
arr_problems.findPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    .then(findPrime => console.log(findPrime))
    .catch(err => console.log('Error accrued while finding prime', err))