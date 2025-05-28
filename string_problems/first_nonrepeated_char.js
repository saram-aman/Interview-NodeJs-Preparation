/**
 * Find the first non-repeated character in a string
 * @param {string} str - Input string
 * @returns {string} - First non-repeated character or empty string if none found
 */
function firstNonRepeatedChar(str) {
    // Create a map to store character frequencies
    const charCount = new Map();
    
    // Count frequency of each character
    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find first character with frequency 1
    for (const char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // Return empty string if no non-repeated character found
    return '';
}

// Example usage
console.log(firstNonRepeatedChar('leetcode')); // 'l'
console.log(firstNonRepeatedChar('loveleetcode')); // 'v'
console.log(firstNonRepeatedChar('aabb')); // ''
