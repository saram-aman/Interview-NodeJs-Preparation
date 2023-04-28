function func(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}
const res = func([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4], 3)
console.log(res)