class ArrayProblems:
    def __init__(self, arr):
        self.arr = arr.copy()

    def ReverseArrA(self):
        response_arr = []
        for i in range(len(self.arr) - 1, -1, -1):
            response_arr.append(self.arr[i])
        return response_arr

    def ReverseArrB(self):
        left = 0
        right = len(self.arr) - 1
        while left < right:
            self.arr[left], self.arr[right] = self.arr[right], self.arr[left]
            left += 1
            right -= 1
        return self.arr

arr_problems = ArrayProblems([0, 43, 3, 2, 3, 4, 6])
print(arr_problems.ReverseArrA())
print(arr_problems.ReverseArrB())