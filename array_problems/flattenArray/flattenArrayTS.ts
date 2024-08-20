import array from '../array.json'
class ArrayProblems {
    async flatten_array(arr: any[]): Promise <any[]> {
        let flatten_arr: any[] = []
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                flatten_arr = flatten_arr.concat(await this.flatten_array(arr[i]))
            } else {
                flatten_arr.push(arr[i])
            }
        }
        return flatten_arr
    }
}
const array_problems = new ArrayProblems()
Promise.all(([array_problems.flatten_array(array)]))
    .then((flatten_array) => console.log(flatten_array))
    .catch((err) => console.error(err))