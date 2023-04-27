function func(str){
    let words = str.split(" ")
    let output = ""

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        let newWord = ""

        for (let j = 0; j < currentWord.length; j++) {
            let currentChar = currentWord.charAt(j)

            switch (currentChar) {
            case "M":
                newWord += "J"
                break
            case "P":
                newWord += "M"
                break
            case "I":
                newWord += "P"
                break
            case "J":
                newWord += "I"
                break
            default:
                newWord += currentChar
            }
        }
        output += newWord + " "
    }
    return output
}
let res = func("Mobile Programming In JAVA")
console.log(res)