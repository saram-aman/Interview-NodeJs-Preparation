class ArrayProblems:
    def findMedian(self, arr1, arr2):
        merged = arr1 + arr2
        merged.sort()
        mid = len(merged) // 2
        return (merged[mid - 1] + merged[mid]) / 2 if (len(merged) % 2 == 0) else merged[mid]


array_problems = ArrayProblems()
median = array_problems.findMedian([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])
print(median)
