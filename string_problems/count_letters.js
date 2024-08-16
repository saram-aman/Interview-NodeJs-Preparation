function count_letters(str){
    let countAlphabet = {}
    for (let char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) countAlphabet[char] = (countAlphabet[char] || 0) + 1
    }
    return countAlphabet
}
console.log(count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files."))