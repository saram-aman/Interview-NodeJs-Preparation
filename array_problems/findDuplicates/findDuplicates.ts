class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async findDuplicates(): Promise<number[]> {
        try {
            const seen: Set<number> = new Set();
            const duplicates: number[] = [];
            for (let i = 0; i < this.arr.length; i++) {
                if (seen.has(this.arr[i])) {
                    duplicates.push(this.arr[i]);
                } else {
                    seen.add(this.arr[i]);
                }
            }
            return duplicates;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findDuplicates:", error.message);
            } else {
                console.error("Unknown error in findDuplicates");
            }
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 5, 7, 9]);
    console.log(await array_problems.findDuplicates());
})();