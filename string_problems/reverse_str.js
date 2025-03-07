class StringProblems {
    async reverse_str(str) {
        return str.split('').reverse().join('')
    }
}
const stringProblems = new StringProblems()
stringProblems.reverse_str("hello")
    .then(reverse_str => console.log(reverse_str))
    .catch(err => console.error('An error occurred in reverse_str: ', err))
    