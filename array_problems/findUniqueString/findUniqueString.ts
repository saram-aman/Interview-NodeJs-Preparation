class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }   
    public async findUniqueString(): Promise<string> {
        try {
            const strArr: string[] = this.arr.map(num => String.fromCharCode(num));
            return strArr.join('');
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findUniqueString:", error.message);
            } else {
                console.error("Unknown error in findUniqueString");
            }
            return "";
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
    console.log(await array_problems.findUniqueString());
})();