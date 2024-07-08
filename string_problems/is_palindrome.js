class StringProblems {
    async isPalindrome(str) {
         try {
             str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
             return str === str.split("").reverse().join("")
         } catch (err) {
             console.error('An error occurred in isPalindrome: ', err)
         }
    }
}
const stringProblems = new StringProblems()
Promise.all(([stringProblems.isPalindrome("not a palindrome")]))
    .then(([is_palindrome]) => {
        console.log(is_palindrome)
    })
    .catch((err) => {
        console.error('An error occurred in is_palindrome: ', err)
    })