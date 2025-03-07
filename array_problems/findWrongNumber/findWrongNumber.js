class ArrayProblems {
    async findWrongNumber(arr) {
        try {
            for (let i = 1; i < arr.length; i++) {
                if(arr[i] !== arr[i - 1] + 1) {
                    return arr[i]
                }
            }
        } catch (error) {
            console.error('Error occurred while finding wrong number:', error)
        }
    }
}
const array_problems = new ArrayProblems()
array_problems.findWrongNumber([1, 2, 3, 4, 5, 6, 17, 8, 9, 10])
    .then(findWrongNumber => console.log(findWrongNumber))
    .catch(err => console.error('Error occurred while finding wrong number:', err))