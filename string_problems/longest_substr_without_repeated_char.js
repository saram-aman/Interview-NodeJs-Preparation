class StringProblems {
    constructor(str) {
        this.str = str
    }
    async lengthOfLongestSubstring() {
        let n = this.str.length;
        let set = new Set();
        let ans = 0, i = 0, j = 0;
        while (i < n && j < n) {
            if (!set.has(this.str[j])) {
                set.add(this.str[j++]);
                ans = Math.max(ans, j - i);
            } else {
                set.delete(this.str[i++]);
            }
        }
        return ans;
    }
}
const stringProblems = new StringProblems("abcabcbb")
console.log(stringProblems.lengthOfLongestSubstring())