class ArrayProblems {
    private arr: number[];
    constructor(arr: number[]) {
        this.arr = [...arr];
    }
    public async quick(items: number[] | null = null): Promise<number[]> {
        const list: number[] = items ? [...items] : [...this.arr]; 
        if (list.length < 2) return list;
        const pivot: number = list[0];
        const smaller: number[] = list.slice(1).filter(item => item < pivot);
        const bigger: number[] = list.slice(1).filter(item => item > pivot);
        const equal: number[] = list.filter(item => item === pivot);
        return [...this.quick(smaller), ...equal, ...this.quick(bigger)];
    }

    public async bubble(items: number[] | null = null): Promise<number[]> {
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

    public async select(items: number[] | null = null): Promise<number[]> {
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

    public async insert(items: number[] | null = null): Promise<number[]> {
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

    public async simple(items: number[] | null = null): Promise<number[]> {
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

    public async mergeSort(items: number[] | null = null): Promise<number[]> {
        const list: number[] = items ? [...items] : [...this.arr]; 
        if (list.length <= 1) return list;
        const middle: number = Math.floor(list.length / 2);
        const left: number[] = await this.mergeSort(list.slice(0, middle));
        const right: number[] = await this.mergeSort(list.slice(middle));
        return this.merge(left, right);
    }

    private async merge(left: number[], right: number[]): Promise<number[]> {
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
(async () => {
    const array_problems = new ArrayProblems([64, 34, 25, 12, 22, 11, 90]);
    console.log("Quick Sort:", await array_problems.quick());
    console.log("Bubble Sort:", await array_problems.bubble());
    console.log("Selection Sort:", await array_problems.select());
    console.log("Insertion Sort:", await array_problems.insert());
    console.log("Simple Sort:", await array_problems.simple());
    console.log("Merge Sort:", await array_problems.mergeSort());
})();