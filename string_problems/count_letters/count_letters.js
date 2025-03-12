class StringProblems {
    constructor(str) {
        this.str = str;
    }
    count_letters(){
        let countAlphabet = {}
        for (let char of this.str.toLowerCase()) {
            if (/[a-z]/.test(char)) countAlphabet[char] = (countAlphabet[char] || 0) + 1
        }
        return countAlphabet
    }
}
const stringProblems = new StringProblems("command is used for compiling, building, and managing Go programs, not directly executing individual files.")
console.log(stringProblems.count_letters())