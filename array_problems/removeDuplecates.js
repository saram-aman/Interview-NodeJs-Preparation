function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if(!arr.includes(element)) delete element
    }
    return arr
}
console.log([3,5,2,7,9,3,2,6,9])