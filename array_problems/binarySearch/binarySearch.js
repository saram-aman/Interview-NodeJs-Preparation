class ArrayProblems {
    async binarySearch(arr, target) {
        let left = 0
        let right = arr.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            return arr[mid] === target ? mid : (arr[mid] < target) ? left = mid + 1 : right = mid - 1
        }
        return -1
    }
}

const array_problems = new ArrayProblems()
array_problems.binarySearch([1, 3, 5, 7, 9], 5)
    .then((search) => console.log(search))
    .catch((err) => console.error(err))