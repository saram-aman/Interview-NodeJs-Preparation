class ArrayProblems {
    protected arr: number[];

    constructor(arr: number[]) {
        this.arr = [...arr];
    }

    ReverseArrA(): number[] {
        let response_arr: number[] = [];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            response_arr.push(this.arr[i]);
        }
        return response_arr;
    }

    ReverseArrB(): number[] {
        let start: number = 0, end: number = this.arr.length - 1;
        while (start < end) [this.arr[start++], this.arr[end--]] = [this.arr[end], this.arr[start]];
        return this.arr;
    }
}

const arr_problem: ArrayProblems = new ArrayProblems([1, 2, 3, 4, 5]);
console.log(arr_problem.ReverseArrA());
console.log(arr_problem.ReverseArrB());
