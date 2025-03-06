class ArrayProblems:
    def removeAdjacentDuplicates(self, arr):
        if len(arr) == 0:
            return []
        stack = []
        stack.append(arr[0])
        for i in range(1, len(arr)):
            if len(stack) > 0 and stack[-1] == arr[i]:
                stack.pop()
            else:
                stack.append(arr[i])
        return stack


array_problems = ArrayProblems()
result = array_problems.removeAdjacentDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9])
print(result)