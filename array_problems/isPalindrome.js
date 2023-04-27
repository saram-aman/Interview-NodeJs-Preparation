function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return str === str.split("").reverse().join("")
}
const res = isPalindrome("not a palindrome")
console.log(res)