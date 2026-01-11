class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async findMedian(): Promise<number> {
        try {
            const sortedArr = [...this.arr].sort((a, b) => a - b);
            const middleIndex = Math.floor(sortedArr.length / 2);
            if (sortedArr.length % 2 === 0) {
                return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
            } else {
                return sortedArr[middleIndex];
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findMedian:", error.message);
            } else {
                console.error("Unknown error in findMedian");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([5, 3, 8, 1, 2, 7, 4, 6]);
    console.log(await array_problems.findMedian());
})()