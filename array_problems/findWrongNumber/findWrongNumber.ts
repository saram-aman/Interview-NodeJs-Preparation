class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async findWrongNumber(): Promise<number> {
        try {
            for (let i = 1; i < this.arr.length; i++) {
                if(this.arr[i] !== this.arr[i - 1] + 1) {
                    return this.arr[i]
                }
            }
            return -1
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findWrongNumber:", error.message);
            } else {
                console.error("Unknown error in findWrongNumber");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 5, 7, 9]);
    console.log(await array_problems.findWrongNumber());
})();