class Sort {
    async quick(items) {
        const list = [...items]
        if (list.length < 2) return list
        const pivot = list[0]
        const smaller = list.filter((item) => item < pivot)
        const bigger = list.filter((item) => item > pivot)
        return [...(await this.quick(smaller)),pivot,...(await this.quick(bigger))]
    }
    async bubble(items = []) {
        for (let passover = 0; passover < items.length; passover++) {
            for (let index = 0; index < items.length; index++) {
                if (items[index] > items[index + 1]) {
                    let temporary = items[index]
                    items[index] = items[index + 1]
                    items[index + 1] = temporary
                }
            }
        }
        return items
    }
    async select(items = []) {
        for (let passes = 0; passes < items.length; passes++) {
            let min = passes
            for (let i = passes; i < items.length; i++) {
                if (items[i] < items[min]) {
                    min = i
                }
            }
            if (min !== passes) {
                let temporary = items[passes]
                items[passes] = items[min]
                items[min] = temporary
            }
        }
        return items
    }
    async insert(items = []) {
        for (let i = 1; i < items.length; i++) {
            let index = i - 1
            let temporary = items[i]
            while (index >= 0 && items[index] > temporary) {
                items[index + 1] = items[index]
                index--
            }
            items[index + 1] = temporary
        }
        return items
    }
    async simple(items = []) {
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items.length; j++) {
                if (items[i] < items[j]) {
                    let temp = items[i]
                    items[i] = items[j]
                    items[j] = temp
                }
            }
        }
        return items
    }
}
const arr = [0, 43, 3, 2, 3, 4]
const sort = new Sort()
const quickSort = sort.quick(arr)
const selectSort = sort.select(arr)
const insertSort = sort.insert(arr)
const bubbleSort = sort.bubble(arr)
const simpleSort = sort.simple(arr)
console.log('quick sort: ', quickSort)
console.log('select sort: ', selectSort)
console.log('insert sort: ', insertSort)
console.log('bubble sort: ', bubbleSort)
console.log('simple sort: ', simpleSort)
