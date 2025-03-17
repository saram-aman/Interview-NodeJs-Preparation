const array = [1, [2, [3, [4]], 5]];

class ArrayProblems {
    constructor(arr) {
        this.arr = arr;
    }

    flattenArray(arr = this.arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(this.flattenArray(arr[i]));
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    }
}

const arrayProblems = new ArrayProblems(array);
console.log(arrayProblems.flattenArray());