class ArrayProblems {
    private arr: number[];
    private target: number;
    constructor(arr: number[], target: number) {
        this.arr = arr;
        this.target = target;
    }
    public async twoSum(): Promise<number[]> {
        try {
            const numMap: Map<number, number> = new Map();
            for (let i = 0; i < this.arr.length; i++) {
                const complement: number = this.target - this.arr[i];
                if (numMap.has(complement)) {
                    return [numMap.get(complement)!, i];
                }
                numMap.set(this.arr[i], i);
            }
            return [];
        } catch (error) {
            throw new Error("Error in twoSum method");
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([2, 7, 11, 15], 9);
    console.log(await array_problems.twoSum());
})()