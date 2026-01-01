class StringProblems {
    /**
     * Replaces all occurrences of a substring within a string asynchronously.
     * @param {string} str The original string.
     * @param {string} toReplace The substring to replace.
     * @param {string} replacement The substring to replace with.
     * @returns {Promise<string>} A promise that resolves to the new string with replacements.
     */
    async replaceItems(str, toReplace, replacement) {
        if (typeof str !== 'string') {
            throw new Error("Invalid input: The first argument must be a string.");
        }
        // This operation is synchronous, but the async keyword ensures it returns a promise.
        return str.split(toReplace).join(replacement);
    }
}

const stringProblems = new StringProblems();
stringProblems.replaceItems("hello world, hello there", "hello", "hi")
    .then(result => {
        console.log(result); // hi world, hi there
    })
    .catch(error => console.error(error));