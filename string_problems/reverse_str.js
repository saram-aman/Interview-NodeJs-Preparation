class StringProblems {
    async reverse_str(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }
}
const stringProblems = new StringProblems()
stringProblems.reverse_str("hello")
    .then(reverse_str => console.log(reverse_str))
    .catch(err => console.error('An error occurred in reverse_str: ', err))
    