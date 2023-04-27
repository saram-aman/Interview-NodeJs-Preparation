function func(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
            continue
        }
        res.push(arr[i])
    }
    return res
}