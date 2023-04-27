function func(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    let min = arr[0]
    let max = arr[arr.length - 1]
    return {
        "min": min,
        "max": max
    }
}
const res = func([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4])
console.log(res)