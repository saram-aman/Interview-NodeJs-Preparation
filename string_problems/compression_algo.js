class StringProblems {
    constructor(str) {
        this.str = str;
    }
    setString(str) {
        this.str = str;
    }

    compress() {
        let compressed = '';
        let count = 1;
        for (let i = 0; i < this.str.length; i++) {
            if (this.str[i] === this.str[i + 1]) {
                count++;
            } else {
                compressed += this.str[i] + count;
                count = 1;
            }
        }
        return compressed.length < this.str.length ? compressed : this.str;
    }
}
const stringProblems = new StringProblems();
stringProblems.setString('abcde');
console.log(stringProblems.compress());
