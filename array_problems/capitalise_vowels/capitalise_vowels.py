class ArrayProblems:
    def capitalise_vowels(self, string):
        vowels = ['a', 'e', 'i', 'o', 'u']
        res = ""
        for i in range(len(string)):
            current_char = string[i]
            if current_char in vowels:
                uppercase = current_char.upper()
                res += uppercase
            else:
                res += current_char

        return res


array_problems = ArrayProblems()
string = "We can also traverse the array elements using foreach loop. It returns array element one by one"
capitalised_vowels = array_problems.capitalise_vowels(string)
print(capitalised_vowels)