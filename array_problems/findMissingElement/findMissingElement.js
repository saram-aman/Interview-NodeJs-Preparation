class ArrayProblems {
    async findMissingElement(arr){
        let missings = []
        for (let i = Math.min(...arr); i <= Math.max(...arr); i++) missings.push(i)
        return missings.filter(i => !arr.includes(i))
    }
}
const array_problems = new ArrayProblems()
array_problems.findMissingElement([1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50])
    .then(missingElements => console.log(missingElements))
    .catch((err) => console.log('Error occurred while finding missing elements', err))
