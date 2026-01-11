class ArrayProblems {
    protected arr: number[];
    constructor(arr: number[]) {
        this.arr = [...arr];
    }
    public async ReverseArrA(): Promise<number[]> {
        let response_arr: number[] = [];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            response_arr.push(this.arr[i]);
        }
        return response_arr;
    }

    public async ReverseArrB(): Promise<number[]> {
        let response_arr: number[] = [];
        for (let i = 0; i < this.arr.length; i++) {
            response_arr.unshift(this.arr[i]);
        }
        return response_arr;
    }

    public async ReverseArrC(): Promise<number[]> {
        let response_arr: number[] = [];
        for (let i = this.arr.length - 1; i >= 0; i--) {
            response_arr.push(this.arr[i]);
        }
        return response_arr;
    }
    public async ReverseArrD(): Promise<number[]> {
        let start: number = 0, end: number = this.arr.length - 1;   
        while (start < end) [this.arr[start++], this.arr[end--]] = [this.arr[end], this.arr[start]];
        return this.arr;
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(await array_problems.ReverseArrA());
    console.log(await array_problems.ReverseArrB());
    console.log(await array_problems.ReverseArrC());
    console.log(await array_problems.ReverseArrD());
})()