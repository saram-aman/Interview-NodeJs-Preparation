class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async removeAdjacentDuplicates(): Promise<number[]> {
        try {
            const stack: number[] = [];
            for (let i = 0; i < this.arr.length; i++) {
                if (stack.length > 0 && stack[stack.length - 1] === this.arr[i]) {
                    stack.pop();
                } else {
                    stack.push(this.arr[i]);
                }
            }
            return stack;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in removeAdjacentDuplicates:", error.message);
            } else {
                console.error("Unknown error in removeAdjacentDuplicates");
            }
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7]);
    console.log(await array_problems.removeAdjacentDuplicates());
})()