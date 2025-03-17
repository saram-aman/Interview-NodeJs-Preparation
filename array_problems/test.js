function arr_prob(arr){
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(arr_prob(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}
console.log(arr_prob([1, [2, [3, [4]], 5]]))