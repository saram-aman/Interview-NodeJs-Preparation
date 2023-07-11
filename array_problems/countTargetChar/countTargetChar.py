class ArrayProblems:
    def CountTargetChar(self, characters, char):
        result = []
        characters = characters.lower()
        if len(characters) == 0:
            return False
        for i in range(len(characters)):
            value = characters[i]
            if value.lower() == char.lower():
                result.append(ord(value))
        return len(result)


array_problems = ArrayProblems()
numberChar = array_problems.CountTargetChar("Hello world, this is very basic for developers", 'S')
print(numberChar)
