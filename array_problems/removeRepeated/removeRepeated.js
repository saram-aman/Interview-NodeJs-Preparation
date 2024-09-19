class ArrayProblems {
    async removeRepeatedA(arr){
        let response_arr = []
        for(let i = 0; i < arr.length; i++){
            if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) continue
            response_arr.push(arr[i])
        }
        return response_arr
    }

    async removeRepeatedB(arr) {
        let frequency = []
        for (let i = 0; i < arr.length; i++) frequency[arr[i]] = (frequency[arr[i]] || 0) + 1
        return arr.filter(i => frequency[i] === 1)
    }

    async removeRepeatedC(arr) {
        let frequancy = []
        let response_arr = []
        for (let i = 0; i < arr.length; i++) frequancy[arr[i]] = (frequancy[arr[i]] || 0) + 1
        for (let i = 0; i < arr.length; i++) if(frequancy[arr[i]] === 1) response_arr.push(arr[i])
        return response_arr
    }
}
const array_problems = new ArrayProblems()
Promise.all([
        array_problems.removeRepeatedA([2,2,3,2]),
        array_problems.removeRepeatedB([0,1,0,1,0,1,99]),
        array_problems.removeRepeatedC([3,6,2,3,5,8,6])
    ])
    .then(([
        removeRepeatedA,
        removeRepeatedB,
        removeRepeatedC
    ]) => {
        console.log(removeRepeatedA, removeRepeatedB, removeRepeatedC)
    })
    .catch((err) => {
        console.error('An error accrued in the code:', err)
    })