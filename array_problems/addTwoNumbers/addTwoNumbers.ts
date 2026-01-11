class ArrayProblems {
    private arr1: number[];
    private arr2: number[];
    constructor(arr1: number[], arr2: number[]) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }
    public async AddTwoNumbers(): Promise<number[] | null> {
        try {
            const num1: number = parseInt(this.arr1.slice().reverse().join(""), 10);
            const num2: number = parseInt(this.arr2.slice().reverse().join(""), 10);
            const sum: number = num1 + num2;
            return sum.toString().split("").reverse().map(Number);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in AddTwoNumbers:", error.message);
            } else {
                console.error("Unknown error in AddTwoNumbers");
            }
            return null;
        }
    }
}
(async () => {
    const arrProblems = new ArrayProblems([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
    console.log(await arrProblems.AddTwoNumbers());
})()