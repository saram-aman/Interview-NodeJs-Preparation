class TwoStacks {
    constructor(size) {
        this.size = size
        this.array = new Array(size)
        this.top1 = -1
        this.top2 = size
    }
    push(stackNumber, value) {
        if (this.top1 + 1 === this.top2) {
            console.log('Stack Overflow')
            return
        }
    
        if (stackNumber === 1) {
            this.top1++
            this.array[this.top1] = value
        } else if (stackNumber === 2) {
            this.top2--
            this.array[this.top2] = value
        } else {
            console.log('Invalid stack number')
        }
    }
    
    pop(stackNumber) {
        if (stackNumber === 1) {
            if (this.top1 === -1) {
                console.log('Stack 1 is empty')
                return
            }
            const value = this.array[this.top1]
            this.top1--
            return value
        } else if (stackNumber === 2) {
            if (this.top2 === this.size) {
                console.log('Stack 2 is empty')
                return
            }
            const value = this.array[this.top2]
            this.top2++
            return value
        } else {
            console.log('Invalid stack number')
        }
    }
    
    peek(stackNumber) {
        if (stackNumber === 1) {
            if (this.top1 === -1) {
                console.log('Stack 1 is empty')
                return
            }
            return this.array[this.top1]
        } else if (stackNumber === 2) {
            if (this.top2 === this.size) {
                console.log('Stack 2 is empty')
                return
            }
            return this.array[this.top2]
        } else {
            console.log('Invalid stack number')
        }
    }
    
    isEmpty(stackNumber) {
        if (stackNumber === 1) {
            return this.top1 === -1
        } else if (stackNumber === 2) {
            return this.top2 === this.size
        } else {
            console.log('Invalid stack number')
            return
        }
    }
}
const twoStacks = new TwoStacks(6)
twoStacks.push(1, 10)
twoStacks.push(1, 20)
twoStacks.push(2, 30)
twoStacks.push(2, 40)
console.log(twoStacks.pop(1))
console.log(twoStacks.pop(2))
console.log(twoStacks.peek(1))
console.log(twoStacks.peek(2))
console.log(twoStacks.isEmpty(1))
console.log(twoStacks.isEmpty(2))
