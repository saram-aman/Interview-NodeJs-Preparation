class ArrayProblems{
    async addTwoNumbers(l1, l2) {
        let array = (parseInt(l1.toString().replace(/[,]/g, '')) + parseInt(l2.toString().replace(/[,]/g, ''))).toString().split("").reverse()
        let result = []
        for(let i = 0; i < array.length; i++) result.push(parseInt(array[i]))
        return result
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