class UniqueStringProblems {
    private str: string;
    constructor(str: string) {
        this.str = str;
    }
    public async count_letters(): Promise <{[key: string]: number}> {
        const countAlphabets: {[key: string]: number} = {}
        for (let char of this.str) {
            if(/[a-z]/.test(char)) countAlphabets[char] = (countAlphabets[char] || 0) + 1
        }
        return countAlphabets
    }
}
(async () => {
    const uniqueStringProblems = new UniqueStringProblems("abcdefghijklmnopqrstuvwxyz");
    console.log(await uniqueStringProblems.count_letters());
})();