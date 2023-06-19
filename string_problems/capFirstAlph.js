function capFirstAlph(str) {
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    return arr.join(' ')
}
console.log(capFirstAlph("command is used for compiling, building, and managing Go programs, not directly executing individual files."))