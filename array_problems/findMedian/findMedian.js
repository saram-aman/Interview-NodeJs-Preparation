class ArrayProblems {
    async findMedian(arr1, arr2) {
        try {
            const arr = [...arr1, ...arr2].sort((a, b) => a - b)
            const mid = Math.floor(arr.length / 2)
            return arr.length % 2 === 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
        } catch (error) {
            console.log("Error occurred while finding median", error)
        }
    }
}
const array_problems = new ArrayProblems()
array_problems.findMedian([1,2,3,4,5], [4,5,6,7,8])
    .then(median => console.log(median))
    .catch((err) => console.log("Error accrued while finding median", err))

// time complexity: O(n)
// space complexity: O(n)
// Output: 4.5