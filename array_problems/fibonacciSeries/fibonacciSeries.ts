class ArrayProblems {
    private number: number;
    constructor(number: number) {
        this.number = number;
    }
    public async fibonacciSeries(): Promise<number[]> {
        try {
            const fibSeries: number[] = [];
            fibSeries.push(0);
            fibSeries.push(1);
            for (let i = 2; i < this.number; i++) {
                const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
                fibSeries.push(nextFib);
            }
            return fibSeries;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in fibonacciSeries:", error.message);
            } else {
                console.error("Unknown error in fibonacciSeries");
            }
            return [];
        }
    }   
}
(async () => {
    const array_problems = new ArrayProblems(200);
    console.log(await array_problems.fibonacciSeries());
})();