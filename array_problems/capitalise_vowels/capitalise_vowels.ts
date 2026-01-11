class ArrayProblems {
    private str: string;
    constructor(str: string) { 
        this.str = str;
    }
    public async capitalise_vowels(): Promise<string> {
        try {
            const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
            let res: string = '';
            for (let i = 0; i < this.str.length; i++) {
                if (vowels.includes(this.str[i].toLowerCase())) {
                    const char: number = this.str[i].charCodeAt(0);
                    const upperCase: number = char - 32;
                    res += String.fromCharCode(upperCase);
                } else {
                    res += this.str[i];
                }
            }
            return res;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in capitalise_vowels:", error.message);
            } else {
                console.error("Unknown error in capitalise_vowels");
            }
            return "";
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems("The equivalent Python code for your JavaScript snippet would be as follows");
    const capitalised_vowels = await array_problems.capitalise_vowels();
    console.log(capitalised_vowels);
})();
