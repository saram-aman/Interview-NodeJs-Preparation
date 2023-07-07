class ArrayProblems:
    def commonsInTwoArray(self, arr1, arr2):
        commons = []
        for i in range(len(arr1)):
            if arr1[i] in arr2:
                commons.append(arr1[i])
        return commons


array_problems = ArrayProblems()
array1 = [1, 12, 3, 14, 5, 6, 7, 8, 9, 10]
array2 = [1, 2, 5, 8, 10, 11, 13, 15]
found_commons = array_problems.commonsInTwoArray(array1, array2)
print(found_commons)
