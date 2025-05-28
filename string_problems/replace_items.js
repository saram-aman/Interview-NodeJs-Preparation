/**
 * Replace items in a string with specified replacements
 * @param {string} str - Input string
 * @param {Object|Map} replacements - Key-value pairs of items to replace
 * @returns {string} - String with replacements applied
 */
function replaceItems(str, replacements) {
    if (!str || (!replacements && typeof replacements !== 'object')) {
        return str;
    }
    
    let result = str;
    
    // Handle both Object and Map
    const entries = replacements instanceof Map ? 
        replacements.entries() : 
        Object.entries(replacements);
    
    // Apply each replacement
    for (const [search, replace] of entries) {
        const regex = new RegExp(search, 'g');
        result = result.replace(regex, replace);
    }
    
    return result;
}

// Example usage with Object
console.log(replaceItems('hello world', {
    'hello': 'hi',
    'world': 'earth'
})); // 'hi earth'

// Example usage with Map
const replacements = new Map([
    ['hello', 'bonjour'],
    ['world', 'monde']
]);
console.log(replaceItems('hello world', replacements)); // 'bonjour monde'

// Example with multiple occurrences
console.log(replaceItems('hello hello world', {
    'hello': 'hi'
})); // 'hi hi world'
