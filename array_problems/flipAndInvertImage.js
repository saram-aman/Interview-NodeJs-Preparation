function flipAndInvertImage(image) {
     let result = []
     for(let i = 0; i < image.length; i++) {
          let invertedArr = image[i].reverse().toString().replace(/[,01]/g, (match) => {
               return (match == 0) ? 1 : (match == 1) ? 0 : (match == ",") ? "" : ""
          })
          let subArr = []
          for (let j = 0; j < invertedArr.length; j++) {
            subArr.push(parseInt(invertedArr[j]))
          }
          result.push(subArr)
     }
     return result
}
const res = flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
console.log(res)