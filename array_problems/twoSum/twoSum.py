class ArrayProblems:
    def twoSum(self, nums, target):
        result = []
        for i in range(len(nums)):
            for j in range(len(nums)):
                if (i != j):
                    if ((nums[i] + nums[j]) == target) :
                        result.append(i)

        return result

array_problems = ArrayProblems()
two_sum_res = array_problems.twoSum([2,7,11,15], 9)
print(two_sum_res)