function func(str){
    let arr = str.replace(/[^a-zA-Z]+/g, "").split('')
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj
}