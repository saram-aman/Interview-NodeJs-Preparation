class ArrayProblems {
    async CountTargetChar(str, char) {
        let result = []
        str = str.toLowerCase()
        if (!str.length) return false
        for (var i = 0; i < str.length; i++) if (str.charCodeAt(i)) if (str.charCodeAt(i) == char.toLowerCase().charCodeAt(0)) result.push(str.charCodeAt(i))
        return result.length
    }
}
const arrayProblems = new ArrayProblems()
Promise.all(([arrayProblems.CountTargetChar("Hello world, this is very basic for developers", "S")]))
    .then(([numberChar]) => {
        console.log(numberChar)
    }).catch(error => {
        console.error('Error occurred counting chars:', error)
    })