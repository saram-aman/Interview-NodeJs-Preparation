class ArrayProblems {
    async capitalise_vowels(str: string): Promise<string> {
        let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
        let res: string = '';
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                let char: number = str[i].charCodeAt(0);
                let upperCase: number = char - 32;
                res += String.fromCharCode(upperCase);
            } else {
                res += str[i];
            }
        }
        return res;
    }
}

const array_problems = new ArrayProblems();
const capitalised_vowels = array_problems.capitalise_vowels("The equivalent Python code for your JavaScript snippet would be as follows");

Promise.all([capitalised_vowels])
    .then(([capitalised_vowel]) => {
        console.log(capitalised_vowel);
    })
    .catch((err) => {
        console.log('Error occurred while capitalising vowels', err);
    });
