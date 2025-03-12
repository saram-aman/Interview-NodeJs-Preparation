class ArrayProblems {
    constructor(str) {
        this.str = str;
    }

    capitalise_vowels() {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let res = '';
        for (let i = 0; i < this.str.length; i++) {
            if (vowels.includes(this.str[i].toLowerCase())) {
                res += this.str[i].toUpperCase();
            } else {
                res += this.str[i].toLowerCase();
            }
        }
        return res;
    }
}

const arrayProblems = new ArrayProblems("The equivalent Python code for your JavaScript snippet would be as follows");
console.log(arrayProblems.capitalise_vowels());
