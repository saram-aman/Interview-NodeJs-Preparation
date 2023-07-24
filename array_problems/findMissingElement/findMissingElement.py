class ArrayProblems:
    def findMissingElement(self, arr):
        missings = []
        for i in range(min(arr), max(arr) + 1):
            missings.append(i)
        filtered_missings = [int(i) for i in missings if int(i) not in arr]
        filtered_result = list(map(int, filtered_missings))
        return filtered_result


array_problems = ArrayProblems()
missing_element = array_problems.findMissingElement([1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50])
print(missing_element)