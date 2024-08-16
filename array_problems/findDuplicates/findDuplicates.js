class ArrayProblems {
    async findDuplicates(arr) {
        const count = {}
        const result = []
        for (let i = 0; i < arr.length; i++) {
            count[arr[i]] = (count[arr[i]] || 0) + 1
            if (count[arr[i]] === 2) result.push(arr[i])
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
