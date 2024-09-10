class ArrayProblems {
    async reverse_arr_A(arr) {
        let response_arr = []
        for (let i = arr.length - 1; i >= 0; i--) response_arr.push(arr[i])
        return response_arr
    }
    async reverse_arr_B(arr) {
        let left = 0, right = arr.length - 1
        while (left < right) [arr[left], arr[right]] = [arr[right], arr[left]], left++, right--
        return arr
    }
}

const array_problems = new ArrayProblems()
Promise.all([array_problems.reverse_arr_A([1,2,3,4,5,6,7,8,9]), array_problems.reverse_arr_B([1,2,3,4,5,6,7,8,9])])
    .then(([reverse_arr_A, reverse_arr_B]) => console.log(reverse_arr_A, reverse_arr_B))
    .catch((error) => console.error(error))