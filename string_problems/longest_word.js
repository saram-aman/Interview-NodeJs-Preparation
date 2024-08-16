function longest_word(str) {
    let arr = str.split(' ')
    let longestWord = ""
    for (let word of arr) if (word.length > longestWord.length) longestWord = word
    return longestWord
}
console.log(longest_word("The equivalent Python code for your JavaScript snippet would be as follows"))