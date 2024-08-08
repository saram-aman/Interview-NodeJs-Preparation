import math
class ArrayProblems:
    def arrayToSubArray(self, arr, size):
        size = math.ceil(len(arr) / size)
        result = []
        length = len(arr)
        for i in range(0, length, size):
            slice_end = min(i + size, length)
            result.append(arr[i:slice_end])

        return result


array_problems = ArrayProblems()
subArrays = array_problems.arrayToSubArray([ 5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4 ], 5)
print(subArrays)
