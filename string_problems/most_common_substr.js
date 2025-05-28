/**
 * Find the most common substring of a given length in a string
 * @param {string} str - Input string
 * @param {number} length - Length of substring to find
 * @returns {string} - Most common substring of given length
 */
function mostCommonSubstr(str, length) {
    if (str.length < length) {
        return '';
    }

    // Create a map to store substring frequencies
    const substrCount = new Map();
    
    // Count frequency of each substring
    for (let i = 0; i <= str.length - length; i++) {
        const substr = str.substring(i, i + length);
        substrCount.set(substr, (substrCount.get(substr) || 0) + 1);
    }
    
    // Find substring with highest frequency
    let maxCount = 0;
    let mostCommon = '';
    
    for (const [substr, count] of substrCount) {
        if (count > maxCount) {
            maxCount = count;
            mostCommon = substr;
        }
    }
    
    return mostCommon;
}

// Example usage
console.log(mostCommonSubstr('banana', 2)); // 'an'
console.log(mostCommonSubstr('abcabcabc', 3)); // 'abc'
console.log(mostCommonSubstr('hello', 4)); // 'hell'
