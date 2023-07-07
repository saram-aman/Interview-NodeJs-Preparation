class ArrayProblems {
    async commonInTwoArray(arr1, arr2) {
        let commons = []
        for(let i = 0; i < arr1.length; i++) if(arr2.includes(arr1[i])) commons.push(arr1[i])
        return commons
    }
}
const arrayProblems = new ArrayProblems()
Promise.all(([arrayProblems.commonInTwoArray([1, 12, 3, 14, 5, 6, 7, 8, 9, 10], [1, 2, 5, 8, 10, 11, 13, 15])]))
    .then(([commonInTwoArray]) => {
        console.log(commonInTwoArray)
    })
    .catch((err) => {
        console.log('Error accrued while finding commons', err)
    })