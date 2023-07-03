function twoSum(nums, target) {
    const result = []
    for (let i = 0; i < nums.length; i++) for (let j = 0; j < nums.length; j++) if(i !== j) if((nums[i] + nums[j]) === target) result.push(i)
    return result
}
console.log(twoSum([2,7,11,15], 9))