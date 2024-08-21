import math
class ArrayProblems:
    def binarySearch(self, arr, target):
        left = 0
        right = len(arr) - 1
        while left <= right:
            mid = math.floor((left + right) / 2)
            if arr[mid] == target:
                return mid
            elif arr[mid] <= target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1
    
array_problems = ArrayProblems()
response = array_problems.binarySearch([1, 3, 5, 7, 9], 5)
print(response)