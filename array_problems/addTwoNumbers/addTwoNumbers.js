class ArrayProblems{
    async addTwoNumbers(arr1, arr2) {
        return (parseInt(arr1.reverse().toString().replace(/[,]/g, "")) + parseInt(arr2.reverse().toString().replace(/[,]/g, ""))).toString().split("").reverse().map(Number)
    }
}
const arr_problems = new ArrayProblems()
Promise.all(([arr_problems.addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])]))
    .then(([addTwoNumbers]) => {
        console.log(addTwoNumbers)
    })
    .catch((err) => {
        console.log('Error accrued while adding two numbers', err)
    })