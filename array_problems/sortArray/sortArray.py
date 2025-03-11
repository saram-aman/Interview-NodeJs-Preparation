class ArrayProblems:
    def __init__(self, arr):
        self.arr = arr.copy()
        
    def Quick(self, arr=None):
        if arr is None:
            arr = self.arr.copy()
        if len(arr) < 2:
            return arr
        pivot = arr[0]
        smaller = [item for item in arr[1:] if item < pivot]
        bigger = [item for item in arr[1:] if item > pivot]
        equal = [item for item in arr if item == pivot]
        return self.quick(smaller) + equal + self.quick(bigger)

    def Bubble(self):
        arr = self.arr.copy()
        length = len(arr)
        for passover in range(length):
            for index in range(length - 1):
                if arr[index] > arr[index + 1]:
                    arr[index], arr[index + 1] = arr[index + 1], arr[index]
        return arr

    def Select(self):
        arr = self.arr.copy()
        length = len(arr)
        for passes in range(length):
            minimum = passes
            for i in range(passes, length):
                if arr[i] < arr[minimum]:
                    minimum = i
            if minimum != passes:
                arr[passes], arr[minimum] = arr[minimum], arr[passes]
        return arr

    def Insert(self):
        arr = self.arr.copy()
        length = len(arr)
        for i in range(1, length):
            index = i - 1
            temporary = arr[i]
            while index >= 0 and arr[index] > temporary:
                arr[index + 1] = arr[index]
                index -= 1
            arr[index + 1] = temporary
        return arr

    def Simple(self):
        arr = self.arr.copy()
        length = len(arr)
        for i in range(length):
            for j in range(length):
                if arr[i] < arr[j]:
                    arr[i], arr[j] = arr[j], arr[i]
        return arr

    def Merge_sort(self, arr=None):
        if arr is None:
            arr = self.arr.copy()
        if len(arr) <= 1:
            return arr
        middle = len(arr) // 2
        left = self.Merge_sort(arr[:middle])
        right = self.Merge_sort(arr[middle:])
        return self.Merge(left, right)

    def Merge(self, left, right):
        merged = []
        while len(left) > 0 and len(right) > 0:
            if left[0] <= right[0]:
                merged.append(left[0])
                left = left[1:]
            else:
                merged.append(right[0])
                right = right[1:]
        merged.extend(left)
        merged.extend(right)
        return merged


arr_problems = ArrayProblems([0, 43, 3, 2, 3, 4, 6])

quick_sort = arr_problems.Quick()
select_sort = arr_problems.Select()
insert_sort = arr_problems.Insert()
bubble_sort = arr_problems.Bubble()
simple_sort = arr_problems.Simple()
merge_sort = arr_problems.Merge_sort()

print("quick sort:", quick_sort)
print("select sort:", select_sort)
print("insert sort:", insert_sort)
print("bubble sort:", bubble_sort)
print("simple sort:", simple_sort)
print("merge sort:", merge_sort)
