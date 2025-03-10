class StringProblems {
    constructor() {
        this.str = '';
    }

    setString(str) {
        this.str = str;
    }

    capFirstAlph() {
        this.str = this.str.split(' ')
        for(let i = 0; i < this.str.length; i++) this.str[i] = this.str[i].charAt(0).toUpperCase() + this.str[i].slice(1)
        return this.str.join(' ')
    }
}
const stringProblems = new StringProblems();
stringProblems.setString('command is used for compiling, building, and managing Go programs, not directly executing individual files.');
console.log(stringProblems.capFirstAlph());
