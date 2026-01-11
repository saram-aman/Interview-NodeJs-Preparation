class ArrayProblems {
    private arr: number[]
    private target: number
    constructor(arr: number[], target: number) {
        this.arr = arr
        this.target = target
    }
    public async binarySearch(): Promise<number> {
        try {
            let left: number = 0
            let right: number = this.arr.length - 1
            while (left <= right) {
                let mid: number = Math.floor((left + right) / 2)
                if (this.arr[mid] === this.target) {
                    return mid
                } else if(this.arr[mid] < this.target) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            return -1
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in binarySearch:", error.message);
            } else {
                console.error("Unknown error in binarySearch");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 3, 5, 7, 9], 5)
    console.log(await array_problems.binarySearch())
})()