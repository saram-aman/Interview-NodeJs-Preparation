class ArrayProblems {
    async binarySearch(arr: number[], target: number): Promise <number> {
        let left: number = 0
        let right: number = arr.length - 1
        while (left <= right) {
            let mid: number = Math.floor((left + right) / 2)
            if (arr[mid] === target) {
                return mid
            } else if(arr[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return -1
    }
}

const array_problems = new ArrayProblems()
array_problems.binarySearch([1, 3, 5, 7, 9], 5)
    .then((search) => console.log(search))
    .catch((err) => console.error(err))