def findWrongNUmber(arr):
    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    return None


response = findWrongNUmber([1, 2, 3, 4, 17, 5, 6, 7, 8])
print(response)
