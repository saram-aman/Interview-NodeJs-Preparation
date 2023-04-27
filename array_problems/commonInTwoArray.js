function func(arr1, arr2){
    let commons = []
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i]
        if(arr2.includes(element)){
            commons.push(arr1[i])
        }
    }
    return commons
}
const res = func([1, 12, 3, 14, 5, 6, 7, 8, 9, 10], [1, 2, 5, 8, 10, 11, 13, 15])
console.log(res) // [1, 5, 8, 10]