class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async removeDuplicates(): Promise<number[]> {
        try {
            const uniqueElements: Set<number> = new Set();
            for (let i = 0; i < this.arr.length; i++) {
                uniqueElements.add(this.arr[i]);
            }
            return Array.from(uniqueElements);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in removeDuplicates:", error.message);
            } else {
                console.error("Unknown error in removeDuplicates");
            }
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9]);
    console.log(await array_problems.removeDuplicates());
})()