class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    public async findPrime(): Promise<number[]> {
        try {
            const primes: number[] = [];
            for (let i = 0; i < this.arr.length; i++) {
                if (this.isPrime(this.arr[i])) {
                    primes.push(this.arr[i]);
                }
            }
            return primes;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in findPrime:", error.message);
            } else {
                console.error("Unknown error in findPrime");
            }
            return [];
        }
    }

    private isPrime(num: number): boolean {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
(async () => {
    const array_problems = new ArrayProblems([10, 15, 23, 42, 7, 3, 19, 8, 4, 29]);
    console.log(await array_problems.findPrime());
})();