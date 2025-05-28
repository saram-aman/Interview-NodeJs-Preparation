/**
 * Remove specified items from a string
 * @param {string} str - Input string
 * @param {string|Array} items - Items to remove (string or array of strings)
 * @returns {string} - String with items removed
 */
function removeItems(str, items) {
    if (typeof items === 'string') {
        // If items is a string, create a regex to remove all occurrences
        const regex = new RegExp(items, 'g');
        return str.replace(regex, '');
    }
    
    if (Array.isArray(items)) {
        // If items is an array, remove each item sequentially
        let result = str;
        for (const item of items) {
            const regex = new RegExp(item, 'g');
            result = result.replace(regex, '');
        }
        return result;
    }
    
    return str;
}

// Example usage
console.log(removeItems('hello world', 'l')); // 'heo word'
console.log(removeItems('hello world', ['l', 'o'])); // 'he wrd'
console.log(removeItems('hello hello world', 'hello ')); // 'world'
