class StringProblems:
    def count_letters(self, str):
        countAlphabets = {}
        for char in str:
            if char in countAlphabets:
                countAlphabets[char] += 1
            else:
                countAlphabets[char] = 1

        return countAlphabets
    
string_problems = StringProblems()
print(string_problems.count_letters("command is used for compiling, building, and managing Go programs, not directly executing individual files."))