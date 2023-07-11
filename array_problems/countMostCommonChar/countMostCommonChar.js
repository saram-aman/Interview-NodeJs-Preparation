class ArrayProblems {
    async countMostCommonChar(str) {
        str = str.replace(/[^a-zA-Z]/g, "").toLowerCase()
        let Obj = {}
        for (let i = 0; i < str.length; i++) Obj[str.charAt(i)] ? Obj[str.charAt(i)]++ : Obj[str.charAt(i)] = 1
        let max = 0, maxKey = ''
        for (let key in Obj) if (Obj[key] > max) max = Obj[key], maxKey = key
        return maxKey
    }
}
const arrayProblems = new ArrayProblems()
const mostCommon = arrayProblems.countMostCommonChar("Hello world, this is very basic for developers")
Promise.all(([mostCommon]))
    .then(([mostCommonChars]) => {
        console.log(mostCommonChars)
    }).catch(error => {
        console.error('Error occurred counting most common chars:', error)
    })