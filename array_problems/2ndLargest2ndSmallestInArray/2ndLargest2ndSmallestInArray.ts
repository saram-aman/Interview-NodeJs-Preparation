class UniqueArrayProblems {
    async secondIndex(arr: number[]): Promise<{ "2ndmin": number, "2ndmax": number }> {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        let min = arr[1];
        let max = arr[arr.length - 2];
        return {
            "2ndmin": min,
            "2ndmax": max
        };
    }
}

const uniqueArrayProblems = new UniqueArrayProblems();
uniqueArrayProblems.secondIndex([5, 9, 1, 11, 7, 2, 6, 3, 10, 8, 12, 4])
    .then((secondIndex) => {
        console.log(secondIndex);
    })
    .catch((err) => {
        console.log('Error occurred while finding second min and max', err);
    });