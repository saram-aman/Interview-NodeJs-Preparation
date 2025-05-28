/**
 * Implementation of string search algorithms
 */

/**
 * Naive string search algorithm
 * @param {string} text - Text to search in
 * @param {string} pattern - Pattern to search for
 * @returns {number[]} - Array of starting indices where pattern is found
 */
function naiveSearch(text, pattern) {
    const positions = [];
    const n = text.length;
    const m = pattern.length;
    
    // Check each possible position in text
    for (let i = 0; i <= n - m; i++) {
        let j;
        // Check if pattern matches at current position
        for (j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) {
                break;
            }
        }
        // If pattern fully matched, add position
        if (j === m) {
            positions.push(i);
        }
    }
    
    return positions;
}

/**
 * Compute KMP failure function (longest proper prefix which is also suffix)
 * @param {string} pattern - Pattern to compute failure function for
 * @returns {number[]} - Failure function array
 */
function computeKMPFailure(pattern) {
    const failure = [0];
    let i = 1;
    let j = 0;
    
    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            failure[i] = j + 1;
            i++;
            j++;
        } else if (j > 0) {
            j = failure[j - 1];
        } else {
            failure[i] = 0;
            i++;
        }
    }
    
    return failure;
}

/**
 * KMP (Knuth-Morris-Pratt) string search algorithm
 * @param {string} text - Text to search in
 * @param {string} pattern - Pattern to search for
 * @returns {number[]} - Array of starting indices where pattern is found
 */
function kmpSearch(text, pattern) {
    if (pattern.length === 0) return [];
    
    const positions = [];
    const failure = computeKMPFailure(pattern);
    let i = 0; // text index
    let j = 0; // pattern index
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                positions.push(i - j);
                j = failure[j];
            } else {
                j++;
            }
            i++;
        } else if (j > 0) {
            j = failure[j - 1];
        } else {
            i++;
        }
    }
    
    return positions;
}

// Example usage
const text = "AABAACAADAABAAABAA";
const pattern = "AABA";

console.log('Naive Search:', naiveSearch(text, pattern)); // [0, 9, 13]
console.log('KMP Search:', kmpSearch(text, pattern)); // [0, 9, 13]

// Test with overlapping pattern
const text2 = "AAAAA";
const pattern2 = "AA";

console.log('Naive Search (overlapping):', naiveSearch(text2, pattern2)); // [0, 1, 2, 3]
console.log('KMP Search (overlapping):', kmpSearch(text2, pattern2)); // [0, 1, 2, 3]
