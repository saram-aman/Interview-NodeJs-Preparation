function func(arr){
    const sum = arr.reduce((num1, num2) => {
        return num1 + num2
    }, 0)
    //return sum // for sum
    //return sum / arr.length // for average
}
const res = func([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4])
console.log(res)