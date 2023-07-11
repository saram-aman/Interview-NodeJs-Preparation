class Sort {
    async quick(items) {
        const list = [...items]
        if (list.length < 2) return list
        const pivot = list[0]
        const smaller = list.filter((item) => item < pivot)
        const bigger = list.filter((item) => item > pivot)
        let equal = list.filter((item) => item == pivot)
        return [...(await this.quick(smaller)),...equal,...(await this.quick(bigger))]
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
                if (items[i] < items[min]) min = i
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
        for(var i = 1; i < items.length; i++) {
            var temp = items[i]
            for(var j = i - 1; j >= 0 && items[j] > temp; j--) {
                items[j+1] = items[j]
            }
            items[j+1] = temp
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
    async mergeSort(items = []) {
        if (items.length <= 1) return items
        const middle = Math.floor(items.length / 2)
        const left = await this.mergeSort(items.slice(0, middle))
        const right = await this.mergeSort(items.slice(middle))
        return this.merge(left, right)
    }
    merge(node1, node2) {
        var result = []
        while (node1.length > 0 && node2.length > 0) result.push(node1[0] < node2[0]? node1.shift() : node2.shift())
        return result.concat(node1.length? node1 : node2)
    }
}
const arr = [0, 43, 3, 2, 3, 4]
const sort = new Sort()
const quickSortPromise = sort.quick(arr)
const selectSortPromise = sort.select(arr)
const insertSortPromise = sort.insert(arr)
const bubbleSortPromise = sort.bubble(arr)
const simpleSortPromise = sort.simple(arr)
const mergeSortPromise = sort.mergeSort(arr)
Promise.all([quickSortPromise,selectSortPromise,insertSortPromise,bubbleSortPromise,simpleSortPromise,mergeSortPromise])
    .then(([quickSort, selectSort, insertSort, bubbleSort, simpleSort, mergeSort]) => {
        console.log('quick sort: ', quickSort)
        console.log('select sort: ', selectSort)
        console.log('insert sort: ', insertSort)
        console.log('bubble sort: ', bubbleSort)
        console.log('simple sort: ', simpleSort)
        console.log('merge sort: ', mergeSort)
    }).catch(error => {
        console.error('Error occurred during sorting:', error)
    })
