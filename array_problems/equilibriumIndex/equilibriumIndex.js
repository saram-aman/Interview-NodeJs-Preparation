class ArrayProblems {
    async equilibriumIndex(arr) {
        const n = arr.length
        if (n === 0) return -1
        let totalSum = arr.reduce((sum, num) => sum + num, 0)
        let leftSum = 0
        for (let i = 0; i < n; i++) {
            totalSum -= arr[i]
            if (leftSum === totalSum) return i
            leftSum += arr[i]
        }
        return -1
    }
}
const array_problems = new ArrayProblems()
const equilibriumIndex = array_problems.equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])
Promise.all(([equilibriumIndex]))
    .then(([findEquilibriumIndex]) => {
        console.log(findEquilibriumIndex)
    })
    .catch((err) => {
        console.log('Error occurred during finding equilibrium Index', err)
    })