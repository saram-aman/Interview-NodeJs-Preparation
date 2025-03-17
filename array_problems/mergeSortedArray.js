let arr1 = [1,2,3,0,0,0], arg1 = 3, arr2 = [2,5,6], arg2 = 3
class ArrayProblems {
    constructor(nums1, m, nums2, n) {
        this.nums1 = nums1
        this.nums2 = nums2
        this.m = m
        this.n = n
    }

    mergeSortedArray() {
        let i = this.m - 1
        let j = this.n - 1
        let k = this.m + this.n - 1
        while (i >= 0 && j >= 0) (this.nums1[i] > this.nums2[j]) ? this.nums1[k--] = this.nums1[i--] : this.nums1[k--] = this.nums2[j--]
        while (j >= 0) this.nums1[k--] = this.nums2[j--]
        return this.nums1
    }
}
const arrayProblems = new ArrayProblems(arr1, arg1, arr2, arg2)
console.log(arrayProblems.mergeSortedArray())