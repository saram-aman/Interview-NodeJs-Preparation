class Solution {
    duplicates(a, n) {
        const count = {}
        const result = []
        for (let i = 0; i < n; i++) {
            const num = a[i]
            count[num] = (count[num] || 0) + 1
            if (count[num] === 2) {
                result.push(num)
            }
        }
        return result.sort((a, b) => a - b)
    }
}
