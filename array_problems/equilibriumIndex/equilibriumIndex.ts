class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async equilibriumIndex(): Promise<number> {
        try {
            const totalSum: number = this.arr.reduce((acc, val) => acc + val, 0);
            let leftSum: number = 0;
            for (let i = 0; i < this.arr.length; i++) {
                const rightSum: number = totalSum - leftSum - this.arr[i];
                if (leftSum === rightSum) {
                    return i;
                }
                leftSum += this.arr[i];
            }
            return -1;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in equilibriumIndex:", error.message);
            } else {
                console.error("Unknown error in equilibriumIndex");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    console.log(await array_problems.equilibriumIndex());
})()