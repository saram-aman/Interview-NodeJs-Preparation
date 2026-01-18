class ArrayProblems:
    def findMedian(self, arr1, arr2):
        merged = arr1 + arr2
        merged.sort()
        mid = len(merged) // 2
        return (merged[mid - 1] + merged[mid]) / 2 if (len(merged) % 2 == 0) else merged[mid]    
        
        
    def findMedianSortedArrays(self, nums1, nums2):
        merged = []
        p1, p2 = 0, 0
        while p1 < len(nums1) and p2 < len(nums2):
            if nums1[p1] < nums2[p2]:
                merged.append(nums1[p1])
                p1 += 1
            else:
                merged.append(nums2[p2])
                p2 += 1
        merged.extend(nums1[p1:])
        merged.extend(nums2[p2:])

        n = len(merged)
        if n % 2 == 1:
            return float(merged[n // 2])
        else:
            mid1 = merged[n // 2 - 1]
            mid2 = merged[n // 2]
            return float((mid1 + mid2) / 2)
            


array_problems = ArrayProblems()
median = array_problems.findMedian([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])
print(median)
median = array_problems.findMedianSortedArrays([1, 3], [2])
print(median)
