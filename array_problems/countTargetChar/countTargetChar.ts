class ArrayProblems {
    private arr: string[];
    private targetChar: string;
    constructor(arr: string[], targetChar: string) {
        this.arr = arr;
        this.targetChar = targetChar;
    }
    public async countTargetChar(): Promise<number> {
        try {
            let count: number = 0;
            for (let i = 0; i < this.arr.length; i++) {
                if (this.arr[i] === this.targetChar) {
                    count++;
                }
            }
            return count;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in countTargetChar:", error.message);
            } else {
                console.error("Unknown error in countTargetChar");
            }
            return -1;
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems("Hello world, this is very basic for developers", "S");
    console.log(await array_problems.countTargetChar());
})();