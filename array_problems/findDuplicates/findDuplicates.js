class ArrayProblems {
    async findDuplicates(arr) {
        const count = {}
        const result = []
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i]
            count[num] = (count[num] || 0) + 1
            if (count[num] === 2) result.push(num)
        }
        return result.sort((a, b) => a - b)
    }
}
const array_problems = new ArrayProblems()
const duplicates = array_problems.findDuplicates([12,34,67,89,54,43,12,34,56,78,98,13,64])
Promise.all(([duplicates]))
    .then(([findDuplicates]) => {
        console.log(findDuplicates)
    })
    .catch((err) => {
        console.log("Error accrued while finding duplicates", err)
    })
