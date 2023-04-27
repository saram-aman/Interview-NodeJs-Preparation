function func(arr1){
    let max = Math.max(...arr1)
    let min = Math.min(...arr1)
    let arr2 = []
    for (let i = min; i <= max; i++) {
        arr2.push(i)
    }
    let output = arr2.filter(i => !arr1.includes(parseInt(i))).join().split(',')
    return output.map(int => parseInt(int))
}
let numbers = [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50]
const res = func(numbers)
console.log(res) // [ 4, 10, 19, 28, 36, 44 ]