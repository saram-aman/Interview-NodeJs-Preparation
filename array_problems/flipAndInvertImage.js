function flipAndInvertImage(image) {
     let result = []
     for (let i = 0; i < image.length; i++) {
          let subImg = image[i]
          let resSub = []
          for (let j = 0; j < subImg.length; j++) {
               let zeroOne = subImg[j]
               if (zeroOne == 1) resSub.push(0)
               if (zeroOne == 0) resSub.push(1)
          }
          result.push(resSub)
     }
     return result
}
const res = flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])
console.log(res)