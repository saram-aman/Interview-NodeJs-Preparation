class ArrayProblems {
    async removeAdjacentDuplicates(arr) {
        let stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
                stack.push(arr[i]);
            } else {
                stack.pop();
            }
        }
        return stack.length;
    } 
}
const arrayProblems = new ArrayProblems();
arrayProblems.removeAdjacentDuplicates([1, 2, 2, 3, 4, 4, 4, 5, 5, 6])
    .then(removeAdjacentDuplicates => console.log(removeAdjacentDuplicates))
    .catch(error => console.error('Error occurred while removing adjacent duplicates:', error));

// time complexity: O(n)
// space complexity: O(n)