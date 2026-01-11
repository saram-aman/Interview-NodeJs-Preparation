class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async removeRepeated(): Promise<number[]> {
        try {
            const uniqueElements: Set<number> = new Set();
            for (let i = 0; i < this.arr.length; i++) {
                if (!uniqueElements.has(this.arr[i])) {
                    uniqueElements.add(this.arr[i]);
                }
            }
            return Array.from(uniqueElements);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in removeRepeated:", error.message);
            } else {
                console.error("Unknown error in removeRepeated");
            }
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 5, 7, 9]);
    console.log(await array_problems.removeRepeated());
})();