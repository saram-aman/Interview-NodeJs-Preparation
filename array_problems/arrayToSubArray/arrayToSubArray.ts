class ArrayProblems {
    private arr: number[];
    private size: number;
    constructor(arr: number[], size: number) {
        this.arr = arr
        this.size = size
    }
    public async ArrayToSubArray(): Promise<number[][]> {
        try {
            this.size = Math.ceil(this.arr.length / this.size)
            let result: number[][] = []
            for (let i = 0; i < this.arr.length; i += this.size) result.push(this.arr.slice(i, i + this.size))
            return result
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in ArrayToSubArray:", error.message);
            } else {
                console.error("Unknown error in ArrayToSubArray");
            }
            return [];
        }
    }
}
(async () => {
    const arrProblems = new ArrayProblems([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4, 5, 2, 7, 3, 0, 4, 8, 1, 6], 4);
    console.log(await arrProblems.ArrayToSubArray());
})()