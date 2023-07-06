class ArrayProblems:
    def addTwoNumbers(self, array1, array2):
        res_arr = []
        num1 = int(''.join(map(str, array1)).replace(',', ''))
        num2 = int(''.join(map(str, array2)).replace(',', ''))
        items = list(str(num1 + num2)[::-1])
        for i in range(len(items)):
            res_arr.append(int(items[i]))

        return res_arr


array_problems = ArrayProblems()
arr1 = [9, 9, 9, 9, 9, 9, 9]
arr2 = [9, 9, 9, 9]
addedNumbers = array_problems.addTwoNumbers(arr1, arr2)
print(addedNumbers)