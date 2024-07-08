class StringProblems {
    async rommon_to_integer(s) {
        const roman = { 'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000 }
        let result = 0
        for (let i = 0; i < s.length; i++) (i > 0 && roman[s[i]] > roman[s[i - 1]]) ? result += roman[s[i]] - 2 * roman[s[i - 1]] : result += roman[s[i]]
        return result
    }
}

const arr_problems = new StringProblems()
Promie.all(([arr_problems.rommon_to_integer()]))