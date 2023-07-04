class ArrayProblems:
    def arrFunc(self, arr):
        for i in range(len(arr)):
            for j in range(len(arr)):
                if arr[i] < arr[j]:
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp

        min_index = arr[1]
        max_index = arr[-2]
        result = {
            "secondMin": min_index,
            "secondMax": max_index
        }
        return result


array_problems = ArrayProblems()
secondIndexes = array_problems.arrFunc([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4])
print(secondIndexes)