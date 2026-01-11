import array from '../array.json'
class ArrayProblems {
    private arr: any[];
    constructor() {
        this.arr = [];
    }
    public async flatten_array(): Promise <any[]> {
        let flatten_arr: any[] = []
        for (let i = 0; i < this.arr.length; i++) {
            if(Array.isArray(this.arr[i])) {
                flatten_arr = flatten_arr.concat(await this.flatten_array(this.arr[i]))
            } else {
                flatten_arr.push(this.arr[i])
            }
        }
        return flatten_arr
    }
}
(async () => {
    const array_problems = new ArrayProblems();
    console.log(await array_problems.flatten_array());
})()