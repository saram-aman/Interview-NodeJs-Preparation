class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async threeSum(): Promise<number[][]> {
        try {
            const result: number[][] = [];
            this.arr.sort((a, b) => a - b);
            for (let i = 0; i < this.arr.length - 2; i++) {
                if (i > 0 && this.arr[i] === this.arr[i - 1]) continue;
                let left = i + 1;
                let right = this.arr.length - 1;
                while (left < right) {
                    const sum = this.arr[i] + this.arr[left] + this.arr[right];
                    if (sum === 0) {
                        result.push([this.arr[i], this.arr[left], this.arr[right]]);
                        while (left < right && this.arr[left] === this.arr[left + 1]) left++;
                        while (left < right && this.arr[right] === this.arr[right - 1]) right--;
                        left++;
                        right--;
                    } else if (sum < 0) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
            return result;
        } catch (error) {
            console.error("Error in threeSum:", error);
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([-1, 0, 1, 2, -1, -4]);
    console.log(await array_problems.threeSum());
})()