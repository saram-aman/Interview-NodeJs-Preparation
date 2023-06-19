function addTwoNumbers(l1, l2) {
    let array = (parseInt(l1.toString().replace(/[,]/g, '')) + parseInt(l2.toString().replace(/[,]/g, ''))).toString().split("").reverse()
    let result = []
    for(let i = 0; i < array.length; i++) result.push(parseInt(array[i]))
    return result
}
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))