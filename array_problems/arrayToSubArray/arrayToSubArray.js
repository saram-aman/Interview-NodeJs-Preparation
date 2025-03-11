class ArrayProblems {
    constructor(arr, size) {
        this.arr = arr
        this.size = size
    }

    ArrayToSubArray() {
        this.size = Math.ceil(this.arr.length / this.size)
        let result = []
        for (let i = 0; i < this.arr.length; i += this.size) result.push(this.arr.slice(i, i + this.size))
        return result
    }
}

const arrProblems = new ArrayProblems([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4, 5, 2, 7, 3, 0, 4, 8, 1, 6], 4);4
console.log(arrProblems.ArrayToSubArray());
