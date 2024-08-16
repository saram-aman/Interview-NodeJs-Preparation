class ArrayProblems {
    async func_one(arr){
        let res = []
        for(let i = 0; i < arr.length; i++){
            if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) continue
            res.push(arr[i])
        }
        return res
    }

    async func_two(arr) {
        let frequency = []
        arr.reduce((acc, val) => {
            frequency[val] = (frequency[val] || 0) + 1
        }, [])
        return arr.filter(i => frequency[i] === 1)
    }

    async func_three(arr) {
        let frequency = []
        let result = []
        for (let i = 0; i < arr.length; i++) {
            frequency[arr[i]] = (frequency[arr[i]] || 0) + 1
        }
        for (let i = 0; i < arr.length; i++) {
            if (frequency[arr[i]] === 1) result.push(arr[i])
        }
        return result
    }
}
const array_problems = new ArrayProblems()
Promise.all([
         array_problems.func_one([2,2,3,2]),
         array_problems.func_two([0,1,0,1,0,1,99]),
         array_problems.func_three([3,6,2,3,5,8,6])
     ])
    .then(([
        func_one,
        func_two,
        func_three
    ]) => {
        console.log(func_one, func_two, func_three)
    })
    .catch((err) => {
        console.error('An error accrued in the code:', err)
    })