function findMedian(arr1, arr2) {
    let merged = arr1.concat(arr2)
    merged.sort((a, b) => a - b)
    let mid = Math.floor(merged.length / 2)
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid]
}
console.log(findMedian([1,2,3,4,5], [4,5,6,7,8]))