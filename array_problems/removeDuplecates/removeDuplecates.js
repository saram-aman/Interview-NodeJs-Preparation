class ArrayProblems {
    async remove_duplicates(nums) {
        let result_arr = []
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i]
            let count = 0
            for (let j = 0; j < result_arr.length; j++) if (result_arr[j] === element) count++
            if (count < 1) result_arr.push(element)
        }
        return result_arr
    }
}

let array_problems = new ArrayProblems()
array_problems.remove_duplicates([0,0,1,1,1,1,2,3,3])
    .then((unique_array) => console.log(unique_array))
    .catch((error) => console.error(error))