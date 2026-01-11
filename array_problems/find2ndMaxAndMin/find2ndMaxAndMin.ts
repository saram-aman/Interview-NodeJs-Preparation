class UniqueArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async secondIndex(): Promise<{ "2ndmin": number, "2ndmax": number }> {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = i + 1; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) {
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = temp;
                }
            }
        }
        let min = this.arr[1];
        let max = this.arr[this.arr.length - 2];
        return {
            "2ndmin": min,
            "2ndmax": max
        };
    }
}
(async () => {
    const uniqueArrayProblems = new UniqueArrayProblems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    console.log(await uniqueArrayProblems.secondIndex());
})();