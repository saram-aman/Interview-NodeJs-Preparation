class ArrayProblems:
    def twoSum(self, nums, target):
        result = []
        for i in range(len(nums)):
            for j in range(len(nums)):
                if (i != j):
                    if ((nums[i] + nums[j]) == target) :
                        result.append(i)

        return result    
        

    def twoSumSinglePass(self, nums, target):
        hash_map = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in hash_map:
                return [hash_map[complement], i]
            hash_map[num] = i
        return []
        

array_problems = ArrayProblems()
two_sum_res = array_problems.twoSum([2,7,11,15], 9)
two_sum_res_single_pass = array_problems.twoSumSinglePass([2,7,11,15], 9)
print(two_sum_res_single_pass)
print(two_sum_res)