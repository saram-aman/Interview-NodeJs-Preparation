class ArrayProblem {
    constructor(arr) {
        this.arr = arr;
    }

    Quick(arr = this.arr) {
        const list = [...arr];
        if (list.length < 2) return list;
        const pivot = list[0];
        const smaller = list.filter((arr) => arr < pivot);
        const bigger = list.filter((arr) => arr > pivot);
        let equal = list.filter((arr) => arr == pivot);
        return [...this.Quick(smaller), ...equal, ...this.Quick(bigger)];
    }

    Bubble() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr.length; j++) {
                if (this.arr[j] > this.arr[j + 1]) [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
            }
        }
        return this.arr;
    }

    Select() {
        for (let i = 0; i < this.arr.length; i++) {
            let min = i;
            for (let j = i; j < this.arr.length; j++) if (this.arr[j] < this.arr[min]) min = j;
            if (min !== i) [this.arr[i], this.arr[min]] = [this.arr[min], this.arr[i]];
        }
        return this.arr;
    }

    Insert() {
        for (var i = 1; i < this.arr.length; i++) {
            var temp = this.arr[i];
            for (var j = i - 1; j >= 0 && this.arr[j] > temp; j--) {
                this.arr[j + 1] = this.arr[j];
            }
            this.arr[j + 1] = temp;
        }
        return this.arr;
    }

    Simple() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr.length; j++) {
                if (this.arr[i] < this.arr[j]) {
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = temp;
                }
            }
        }
        return this.arr;
    }

    MergeSort(arr = this.arr) {
        if (arr.length <= 1) return arr;
        const middle = Math.floor(arr.length / 2);
        const left = this.MergeSort(arr.slice(0, middle));
        const right = this.MergeSort(arr.slice(middle));
        return this.Merge(left, right);
    }

    Merge(node1, node2) {
        var result = [];
        while (node1.length > 0 && node2.length > 0) result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
        return result.concat(node1.length ? node1 : node2);
    }
}

const arr_problems = new ArrayProblem([0, 43, 3, 2, 3, 4]);
console.log('quick sort: ', arr_problems.Quick());
console.log('select sort: ', arr_problems.Select());
console.log('insert sort: ', arr_problems.Insert());
console.log('bubble sort: ', arr_problems.Bubble());
console.log('simple sort: ', arr_problems.Simple());
console.log('merge sort: ', arr_problems.MergeSort());
