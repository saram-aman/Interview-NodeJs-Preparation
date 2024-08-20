import array from '../array.json'
class ArrayProblems {
    async flattenArray(arr) {
        let result = []
        for(let i = 0; i < arr.length; i++) {
            Array.isArray(arr[i]) ? result = result.concat(await this.flattenArray(arr[i])) : result.push(arr[i])
        }
        return result
    }
}
const array_problems = new ArrayProblems()
Promise.all([array_problems.flattenArray(array)])
    .then(([flattenArr]) => console.log(flattenArr))
    .catch((err) => console.log('The error has occurred in the code: ', err))