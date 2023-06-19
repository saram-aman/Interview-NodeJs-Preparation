class Sort:
    def quick(self, items):
        if len(items) < 2:
            return items
        pivot = items[0]
        smaller = [item for item in items if item < pivot]
        bigger = [item for item in items if item > pivot]
        equal = [item for item in items if item == pivot]
        return self.quick(smaller) + equal + self.quick(bigger)

    def bubble(self, items):
        length = len(items)
        for passover in range(length):
            for index in range(length - 1):
                if items[index] > items[index + 1]:
                    items[index], items[index + 1] = items[index + 1], items[index]
        return items

    def select(self, items):
        length = len(items)
        for passes in range(length):
            minimum = passes
            for i in range(passes, length):
                if items[i] < items[minimum]:
                    minimum = i
            if minimum != passes:
                items[passes], items[minimum] = items[minimum], items[passes]
        return items

    def insert(self, items):
        length = len(items)
        for i in range(1, length):
            index = i - 1
            temporary = items[i]
            while index >= 0 and items[index] > temporary:
                items[index + 1] = items[index]
                index -= 1
            items[index + 1] = temporary
        return items

    def simple(self, items):
        length = len(items)
        for i in range(length):
            for j in range(length):
                if items[i] < items[j]:
                    items[i], items[j] = items[j], items[i]
        return items

    def merge_sort(self, items):
        if len(items) <= 1:
            return items
        middle = len(items) // 2
        left = self.merge_sort(items[:middle])
        right = self.merge_sort(items[middle:])
        return self.merge(left, right)

    def merge(self, left, right):
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


arr = [0, 43, 3, 2, 3, 4, 6]
sort = Sort()

quick_sort = sort.quick(arr)
select_sort = sort.select(arr)
insert_sort = sort.insert(arr)
bubble_sort = sort.bubble(arr)
simple_sort = sort.simple(arr)
merge_sort = sort.merge_sort(arr)

print("quick sort:", quick_sort)
print("select sort:", select_sort)
print("insert sort:", insert_sort)
print("bubble sort:", bubble_sort)
print("simple sort:", simple_sort)
print("merge sort:", merge_sort)
