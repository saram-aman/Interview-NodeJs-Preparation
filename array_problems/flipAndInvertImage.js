function flipAndInvertImage(image) {
     let result = []
     for(let i = 0; i < image.length; i++) {
          let strArr = image[i].reverse().toString().replace(/[,01]/g, (match) => {
               if (match === "0") {
                    return "1"
               } else if (match === "1") {
                    return "0"
               } else if(match == ",") {
                    return ""
               }
          })
          let subArr = []
          for(let j = 0; j < strArr.length; j++) {
               subArr.push(parseInt(strArr[j]))
          }
          result.push(subArr)
     }
     return result
}
const res = flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
console.log(res)