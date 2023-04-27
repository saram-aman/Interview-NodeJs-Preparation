function func(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    }
    return newArr
}