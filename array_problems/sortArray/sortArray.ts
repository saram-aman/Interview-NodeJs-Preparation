class ArrayProblems {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = [...arr];
    }

    quick(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        if (list.length < 2) return list;
        const pivot: number = list[0];
        const smaller: number[] = list.slice(1).filter(item => item < pivot);
        const bigger: number[] = list.slice(1).filter(item => item > pivot);
        const equal: number[] = list.filter(item => item === pivot);
        return [...this.quick(smaller), ...equal, ...this.quick(bigger)];
    }

    bubble(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        const length: number = list.length;
        for (let passover = 0; passover < length; passover++) {
            for (let index = 0; index < length - 1; index++) {
                if (list[index] > list[index + 1]) {
                    const temporary: number = list[index];
                    list[index] = list[index + 1];
                    list[index + 1] = temporary;
                }
            }
        }
        return list;
    }

    select(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        const length: number = list.length;
        for (let passes = 0; passes < length; passes++) {
            let min: number = passes;
            for (let i = passes; i < length; i++) {
                if (list[i] < list[min]) min = i;
            }
            if (min !== passes) {
                const temporary: number = list[passes];
                list[passes] = list[min];
                list[min] = temporary;
            }
        }
        return list;
    }

    insert(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        const length: number = list.length;
        for (let i = 1; i < length; i++) {
            let index: number = i - 1;
            const temporary: number = list[i];
            while (index >= 0 && list[index] > temporary) {
                list[index + 1] = list[index];
                index--;
            }
            list[index + 1] = temporary;
        }
        return list;
    }

    simple(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        const length: number = list.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (list[i] < list[j]) {
                    const temp: number = list[i];
                    list[i] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    }

    mergeSort(items: number[] | null = null): number[] {
        const list: number[] = items ? [...items] : [...this.arr]; 
        if (list.length <= 1) return list;
        const middle: number = Math.floor(list.length / 2);
        const left: number[] = this.mergeSort(list.slice(0, middle));
        const right: number[] = this.mergeSort(list.slice(middle));
        return this.merge(left, right);
    }

    private merge(left: number[], right: number[]): number[] {
        const merged: number[] = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] <= right[0]) {
                merged.push(left.shift()!);
            } else {
                merged.push(right.shift()!);
            }
        }
        return [...merged, ...left, ...right];
    }
}

const arr: number[] = [0, 43, 3, 2, 3, 4, 6];
const sort = new ArrayProblems(arr);

const quickSort: number[] = sort.quick();
const selectSort: number[] = sort.select();
const insertSort: number[] = sort.insert();
const bubbleSort: number[] = sort.bubble();
const simpleSort: number[] = sort.simple();
const mergeSort: number[] = sort.mergeSort();

console.log("quick sort:", quickSort);
console.log("select sort:", selectSort);
console.log("insert sort:", insertSort);
console.log("bubble sort:", bubbleSort);
console.log("simple sort:", simpleSort);
console.log("merge sort:", mergeSort);