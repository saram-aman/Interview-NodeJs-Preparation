function addTwoNumbers(l1, l2) {
    let num1 = parseInt(l1.toString().replace(/[,]/g, ''))
    let num2 = parseInt(l2.toString().replace(/[,]/g, ''))
    let sum = num1 + num2
    let array = sum.toString().split("").reverse()
    let result = []
    for(let i = 0; i < array.length; i++){
        result.push(parseInt(array[i]))
    }
    return result
}
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))