function findUniqueString(arr) {
    let resArr = []
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i]
        let isUnique = element.split('').every((el, index, array) => {
            return array.indexOf(el) === array.lastIndexOf(el)
        })
        if(isUnique) {
            resArr.push(element)
        }
    }
    return resArr.length ? resArr.toString() : false
}
console.log(findUniqueString(['123456789', '434ffd', 'asdfghjk', '43fdhnh', 'wgcxhjny', 'fsdf34']))