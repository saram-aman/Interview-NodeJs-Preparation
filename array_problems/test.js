function findWrongNumber(arr) {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i - 1] + 1) {
            return arr[i]
        }
    }
}
console.log(findWrongNumber([1, 2, 3, 4, 17, 5, 6, 7, 8]))