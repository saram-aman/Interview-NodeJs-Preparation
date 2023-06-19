function func(arr) {
    let result = []
    let str = arr.toLocaleString().replace(/[,]/g, '')
    arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        result.push(parseInt(arr[i]))
    }
    return result
}
console.log(func([1,5,3,[4,8,7,0,6,[7,9,7,8]]]))