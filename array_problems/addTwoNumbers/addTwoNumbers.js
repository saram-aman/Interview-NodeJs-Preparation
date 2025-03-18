class ArrayProblems {
    constructor(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    }

    AddTwoNumbers() {
        try {
            const num1 = parseInt(this.arr1.reverse().join(""));
            const num2 = parseInt(this.arr2.reverse().join("")); 
            const sum = num1 + num2;
            return sum.toString().split("").reverse().map(Number);
        } catch (error) {
            console.error("Error in AddTwoNumbers:", error.message);
            return null;
        }
    }
}

const arrProblems = new ArrayProblems([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
console.log(arrProblems.AddTwoNumbers());
