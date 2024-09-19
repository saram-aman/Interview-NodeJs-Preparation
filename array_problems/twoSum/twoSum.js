class ArrayProblems {
    async twoSum(nums, target) {
        const result = []
        for (let i = 0; i < nums.length; i++) for (let j = 0; j < nums.length; j++) if(i !== j) if((nums[i] + nums[j]) === target) result.push(i)
        return result
    }
}

const arrayProblems = new ArrayProblems()
arrayProblems.twoSum([2,7,11,15], 9)
    .then((response) => console.log(response))
    .catch((err) => console.error('An error accrued in twoSum function', err))