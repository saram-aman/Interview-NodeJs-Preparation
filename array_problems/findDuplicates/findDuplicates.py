class ArrayProblems:
    def findDuplicates(self, arr):
        count = {}
        result = []
        for i in range(len(arr)):
            val = arr[i]
            if val not in count:
                count[val] = 1
            else:
                count[val] += 1
                if count[val] == 2:
                    result.append(val)
        result.sort()
        return result


array_problems = ArrayProblems()
duplicates = array_problems.findDuplicates([12, 34, 67, 89, 54, 43, 12, 34, 56, 78, 98, 13, 64])
print(duplicates)
