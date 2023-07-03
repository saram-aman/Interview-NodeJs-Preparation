import math
class ArrayProblems:
    def isPrime(self, number):
        if number < 0:
            return False
        for i in range(2, math.isqrt(number) + 1):
            if number % i == 0:
                return False
        return True

    def findPrime(self, array):
        result = []
        for i in range(len(array)):
            if self.isPrime(array[i]):
                result.append(array[i])
        return result


arr_problems = ArrayProblems()
findPrime = arr_problems.findPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
print(findPrime)


