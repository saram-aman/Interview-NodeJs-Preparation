function findEquilibriumIndex(arr) {
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
console.log(findEquilibriumIndex([-7, 1, 5, 2, -4, 3, 0]))
