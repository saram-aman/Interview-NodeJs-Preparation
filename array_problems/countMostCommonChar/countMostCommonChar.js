class StringProblems {
    constructor(str) {
        this.str = str;
    }

    countMostCommonChar() {
        this.str = this.str.replace(/[^a-zA-Z]/g, "").toLowerCase();
        let charCounts = {};
        for (let i = 0; i < this.str.length; i++) {
            charCounts[this.str.charAt(i)] = (charCounts[this.str.charAt(i)] || 0) + 1;
        }
        let maxCount = 0;
        let maxChar = '';
        for (let char in charCounts) {
            if (charCounts[char] > maxCount) {
                maxCount = charCounts[char];
                maxChar = char;
            }
        }
        return maxChar;
    }
}

const stringProblems = new StringProblems("Hello world, this is very basic for developers");
console.log(stringProblems.countMostCommonChar());