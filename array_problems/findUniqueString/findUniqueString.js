class ArrayProblems {
    async findUniqueString(arr) {
        let response = []
        for(let i = 0; i < arr.length; i++) {
            let element = arr[i]
            let isUnique = element.split('').every((el, index, array) => {
                return array.indexOf(el) === array.lastIndexOf(el)
            })
            if(isUnique) response.push(element)
        }
        return response.length ? response.toString() : false
    }
}
const array_problems = new ArrayProblems()
array_problems.findUniqueString(['123456789', '434ffd', 'asdfghjk', '43fdhnh', 'wgcxhjny', 'fsdf34'])
    .then((unique_strings) => console.log(unique_strings))
    .catch((err) => console.error('An error encountred while doing operation: ', err))