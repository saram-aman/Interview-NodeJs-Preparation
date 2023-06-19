function countMostCommonChar(str) {
    let result = []
    str = str.toLowerCase()
    if (!str.length) return false
    for (var i = 0; i < str.length; i++) if (str.charCodeAt(i)) if (str.charCodeAt(i) == char.toLowerCase().charCodeAt(0)) result.push(str.charCodeAt(i))
    let max = 0
    let maxKey = ''
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            maxKey = key
        }
    }
    return maxKey
}
const res = countMostCommonChar("Hello world, this is very basic for developers")
console.log(res)