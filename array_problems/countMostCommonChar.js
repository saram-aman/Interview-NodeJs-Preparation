function countMostCommonChar(str) {
    let arr = str.toLowerCase().replace(/[^A-Za-z]+/g, '').split('')
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
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