function func(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let res = ''
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            let char = str[i].charCodeAt(0)
            let upperCase = char - 32
            res += String.fromCharCode(upperCase)
        } else {
            res += str[i]
        }
    }
    return res
}
