class arrayProblems {
    async isPrime(number) {
        if(number < 0) return false
        for(let i = 2; i <= Math.sqrt(number); i++) if (number % i === 0) return false
        return true
    }

    async findPrime(array) {
        let result = []
        for(let i = 0; i < array.length; i++) if(await this.isPrime(array[i])) result.push(array[i])
        return result
    }
}
const arr_problems = new arrayProblems()
Promise.all([arr_problems.findPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])])
    .then(([findPrime]) => {
        console.log(findPrime)
    })
    .catch((err) => {
        console.log('Error accrued while finding prime', err)
    })