let arr1 = [1,2,3,0,0,0], arg1 = 3, arr2 = [2,5,6], arg2 = 3
function merge(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while (i >= 0 && j >= 0) (nums1[i] > nums2[j]) ? nums1[k--] = nums1[i--] : nums1[k--] = nums2[j--]
    while (j >= 0) nums1[k--] = nums2[j--]
    return nums1
}
console.log(merge(arr1, arg1, arr2, arg2))