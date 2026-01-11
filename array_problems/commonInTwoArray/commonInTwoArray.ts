class ArrayProblems {
    private arr1: Number[]
    private arr2: Number[]
    constructor(arr1: Number[], arr2: Number[]) {
        this.arr1 = arr1
        this.arr2 = arr2
    }
    public async commonInTwoArray(): Promise<Number[]> {
        try {
            let commons: Number[] = []
            for(let i = 0; i < this.arr1.length; i++) if(this.arr2.includes(this.arr1[i])) commons.push(this.arr1[i])
            return commons
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in commonInTwoArray:", error.message);
            } else {
                console.error("Unknown error in commonInTwoArray");
            }
            return [];
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems([1, 12, 3, 14, 5, 6, 7, 8, 9, 10], [1, 2, 5, 8, 10, 11, 13, 15])
    console.log(await array_problems.commonInTwoArray())
})()