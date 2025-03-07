class ArrayProblems {
     async flipAndInvertImage(arr) {
         try {
             for (let i = 0; i < arr.length; i++) {
                 arr[i].reverse()
                 for (let j = 0; j < arr[i].length; j++) {
                     arr[i][j] = arr[i][j] === 0 ? 1 : 0
                 }
             }
             return arr
         } catch (error) {
             console.log('Error occurred while flipping and inverting the image', error)
         }
     }
}