import array from '../array.json'
class ArrayProblems {
    async flattenArray(arr) {
        try {
            let result = []
            for(let i = 0; i < arr.length; i++) {
                Array.isArray(arr[i]) ? result = result.concat(await this.flattenArray(arr[i])) : result.push(arr[i])
            }
            return result
        } catch (error) {
            console.log('Error occurred while flattening the array', error)
        }
    }
}
const array_problems = new ArrayProblems()
array_problems.flattenArray(array)
    .then(flattenArr => console.log(flattenArr))
    .catch(err => console.log('The error has occurred in the code: ', err))