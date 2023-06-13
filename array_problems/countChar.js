function countChar(str, char) {
    let result = []
    str = str.toLowerCase()
    if (!str.length) return false
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i)) if (str.charCodeAt(i) == char.toLowerCase().charCodeAt(0)) result.push(str.charCodeAt(i))
    }
    return result.length
}
let res = countChar("Hello world, this is very basic for developers", "S")
console.log(res)