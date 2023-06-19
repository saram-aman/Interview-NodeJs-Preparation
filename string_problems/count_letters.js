function count_letters(str){
    let arr = str.replace(/[^a-zA-Z]+/g, "").split('')
    let obj = {}
    for (let i = 0; i < arr.length; i++) (obj[arr[i]]) ? obj[arr[i]]++ : obj[arr[i]] = 1
    return obj
}
console.log(count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files."))