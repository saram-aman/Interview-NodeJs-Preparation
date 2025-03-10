class AnagramsStr {
    constructor() {
        this.str1 = '';
        this.str2 = '';
    }

    setStrings(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    areAnagrams() {
        if (this.str1.length !== this.str2.length) return false;
        return this.str1.split('').sort().join('') === this.str2.split('').sort().join('');
    }
}

const anagramsStr = new AnagramsStr();
anagramsStr.setStrings('listen', 'silent');
console.log(anagramsStr.areAnagrams());