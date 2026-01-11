class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async findMissingElement(): Promise<number> {
        try {
            const n = this.arr.length + 1;
            const expectedSum = (n * (n + 1)) / 2;
            let actualSum = 0;
            for (let i = 0; i < this.arr.length; i++) {
                actualSum += this.arr[i];
            }
            return expectedSum - actualSum;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findMissingElement:", error.message);
            } else {
                console.error("Unknown error in findMissingElement");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 5, 7, 9]);
    console.log(await array_problems.findMissingElement());
})();