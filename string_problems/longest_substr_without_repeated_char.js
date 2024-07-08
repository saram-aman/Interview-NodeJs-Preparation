function lengthOfLongestSubstring(s) {
    let left = 0
    let max = 0
    let result = new Set()
    for (let r = 0; r < s.length; r++) {
        while (result.has(s[r])) {
            result.delete(s[left])
            left += 1
        }
        result.add(s[r])
        max = Math.max(max, r - left + 1)
    }
    return max
}
console.log(lengthOfLongestSubstring("pwwkew"))