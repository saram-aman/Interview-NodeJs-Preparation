class ArrayProblem {
    constructor(arr) {
        this.arr = arr;
    }

    setArr(arr) {
        this.arr = arr;
    }

    find2ndMaxAndMin() {
        if (this.arr.length < 2) {
            throw new Error("Array must contain at least two elements");
        }

        const sortedArr = [...this.arr].sort((a, b) => a - b);
        return { SecondMax: sortedArr[sortedArr.length - 2], SecondMin: sortedArr[1] };
    }
}

const arr_problems = new ArrayProblem();
arr_problems.setArr([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4]);
console.log(arr_problems.find2ndMaxAndMin());
