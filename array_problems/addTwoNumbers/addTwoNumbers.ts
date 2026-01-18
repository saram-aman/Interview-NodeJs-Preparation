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
    public async AddTwoNumbersOptimized(): Promise<number[] | null> {
        try {
            let i = 0;
            let j = 0;
            let carry = 0;
            const result: number[] = [];
            while (i < this.arr1.length || j < this.arr2.length || carry) {
                const digit1 = i < this.arr1.length ? this.arr1[i] : 0;
                const digit2 = j < this.arr2.length ? this.arr2[j] : 0;
                const sum = digit1 + digit2 + carry;
                result.push(sum % 10);
                carry = Math.floor(sum / 10);
                i++;
                j++;
            }
            return result;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in AddTwoNumbersOptimized:", error.message);
            } else {
                console.error("Unknown error in AddTwoNumbersOptimized");
            }
            return null;
        }
    }
    
}
(async () => {
    const arrProblems = new ArrayProblems([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
    console.log(await arrProblems.AddTwoNumbersOptimized());
    console.log(await arrProblems.AddTwoNumbers());
})()