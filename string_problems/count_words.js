class StringProblems {
    constructor(str) {
        this.str = str;
    }

    setString(str) {
        this.str = str;
    }

    count_words() {
        return this.str.split(' ').length
    }
}
const stringProblems = new StringProblems();
stringProblems.setString('command is used for compiling, building, and managing Go programs, not directly executing individual files.');
console.log(stringProblems.count_words());
