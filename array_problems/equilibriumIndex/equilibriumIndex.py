from functools import reduce
class ArrayProblems:
    def equilibriumIndex(self, arr):
        n = len(arr)
        if n == 0:
            return -1
        totalSum = reduce(lambda x, y: x + y, arr)
        leftSum = 0
        for i in range(len(arr)):
            totalSum += arr[i]
            if totalSum == leftSum:
                return i
            leftSum -= arr[i]
        return -1


array_problems = ArrayProblems()
equilibriumIndex = array_problems.equilibriumIndex([-7, 1, 5, 2, -4, 3, 0])
print(equilibriumIndex)

