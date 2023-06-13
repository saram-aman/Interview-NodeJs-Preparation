function isPrime(number) {
    if(number < 0) return false
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false
    }
    return true
}
function findPrime(array) {
    let result = []
    for(let i = 0; i < array.length; i++) {
        if(isPrime(array[i])) result.push(array[i])
    }
    return result
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const prime = findPrime(array)
console.log(prime)