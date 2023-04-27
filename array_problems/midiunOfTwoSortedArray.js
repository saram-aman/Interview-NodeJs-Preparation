function findMedian(arr1, arr2) {
    let merged = arr1.concat(arr2)
    merged.sort((a, b) => a - b)
    let mid = Math.floor(merged.length / 2)
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2
    } else {
        return merged[mid]
    }
}