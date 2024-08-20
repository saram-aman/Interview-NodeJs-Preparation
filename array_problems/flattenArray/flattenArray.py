import json

with open('../array.json') as file:
    array = json.load(file)
class ArrayProblems:
    def flatten_arr(self, arr):
        flatten_arr = []
        for i in range(len(arr)):
            if isinstance(arr[i], list):
                flatten_arr.extend(self.flatten_arr(arr[i]))
            else:
                flatten_arr.append(arr[i])


        return flatten_arr


array_problems = ArrayProblems()
print(array_problems.flatten_arr(array))
