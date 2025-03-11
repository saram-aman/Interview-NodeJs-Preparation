class ArrayProblem {
    constructor(arr) {
        this.arr = arr;
    }

    SetArr(arr) {
        this.arr = arr;
    }

    ReverseArrA() {
        let response_arr = []
        for (let i = this.arr.length - 1; i >= 0; i--) response_arr.push(this.arr[i])
        return response_arr
    }
    ReverseArrB() {
        let start = 0, end = this.arr.length - 1
        while (start < end) [this.arr[start++], this.arr[end--]] = [this.arr[end], this.arr[start]];
        return this.arr;
    }
}

const arr_problems = new ArrayProblem();
arr_problems.SetArr([0, 43, 3, 2, 3, 4]);
console.log('Solution A: ', arr_problems.ReverseArrA());
console.log('Solution B: ', arr_problems.ReverseArrB());
