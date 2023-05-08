function func(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let maxVowelCount = 0
    let vowelsCount = 0
    for(let i = 0; i < k; i++){
        if(vowels.has(s[i])){
            vowelsCount++
        }
    }
    for (let i = k; i <= s.length; i++) {
        if (vowelsCount > maxVowelCount) {
            maxVowelCount = vowelsCount
        }
        if (i === s.length) {
            break
        }
        if (vowels.has(s[i])) {
            vowelsCount++
        }
        if (vowels.has(s[i - k])) {
            vowelsCount--
        }
    }
    return maxVowelCount
}