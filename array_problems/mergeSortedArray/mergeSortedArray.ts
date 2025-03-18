let array1: number[] = [1, 2, 3, 0, 0, 0];
let argument1: number = 3;
let array2: number[] = [2, 5, 6];
let argument2: number = 3;

class ArrayProblem {
    private nums1: number[];
    private nums2: number[];
    private m: number;
    private n: number;

    constructor(nums1: number[], m: number, nums2: number[], n: number) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.m = m;
        this.n = n;
    }

    async mergeSortedArray(): Promise<number[]> {
        let i: number = this.m - 1;
        let j: number = this.n - 1;
        let k: number = this.m + this.n - 1;

        while (i >= 0 && j >= 0) {
            this.nums1[k--] = this.nums1[i] > this.nums2[j] ? this.nums1[i--] : this.nums2[j--];
        }

        while (j >= 0) {
            this.nums1[k--] = this.nums2[j--];
        }

        return this.nums1;
    }
}

const arrayProblemsInstance = new ArrayProblem(array1, argument1, array2, argument2);
arrayProblemsInstance.mergeSortedArray().then(data => console.log(data));