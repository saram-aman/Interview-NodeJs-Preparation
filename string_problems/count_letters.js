function func(str){
    str = str.replace(/[^a-zA-Z]+/g, "").split('')
    return str.reduce((a, b)=> {
        a[b] = a[b] ? (a[b] + 1) : 1
        return a
    }, {})
}