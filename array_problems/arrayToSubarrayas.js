function func(arr, size) {
    size = Math.ceil(arr.length / size)
    console.log(size)
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}
const res = func([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4, 5, 2, 7, 3, 0, 4, 8, 1, 6], 4)
console.log(res)