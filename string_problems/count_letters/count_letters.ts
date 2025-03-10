class UniqueStringProblems {
    async count_letters(str: string): Promise <{[key: string]: number}> {
        const countAlphabets: {[key: string]: number} = {}
        for (let char of str) {
            if(/[a-z]/.test(char)) countAlphabets[char] = (countAlphabets[char] || 0) + 0
        
        }
        return countAlphabets
    }
}
const uniqueStringProblems = new UniqueStringProblems()
string_problems.count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files.")
    .then((count_alpha) => console.log(count_alpha))
    .catch((err) => console.error(err))