function largestTimeFromDigits(arr) {
    const permutations = generatePermutations(arr)
    let maxTime = -1
    for (let permutation of permutations) {
        let hours = permutation[0] * 10 + permutation[1]
        let minutes = permutation[2] * 10 + permutation[3]
        if (hours < 24 && minutes < 60) {
            let time = hours * 60 + minutes
            maxTime = Math.max(maxTime, time)
        }
    }
    if (maxTime === -1) {
        return ""
    } else {
        let hours = Math.floor(maxTime / 60).toString().padStart(2, '0')
        let minutes = (maxTime % 60).toString().padStart(2, '0')
        return `${hours}:${minutes}`
    }
}
function generatePermutations(nums) {
    if (nums.length === 1) {
        return [nums]
    } else {
        let result = []
        for (let i = 0; i < nums.length; i++) {
            let digit = nums[i]
            let remaining = nums.slice(0, i).concat(nums.slice(i + 1))
            let permutations = generatePermutations(remaining)
            for (let permutation of permutations) {
                result.push([digit].concat(permutation))
            }
        }
        return result
    }
}
const array = [1,2,3,4,5]
const func = largestTimeFromDigits(array)
console.log(func)