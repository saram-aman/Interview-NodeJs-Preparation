class ArrayProblems {
    private str: string;
    constructor(str: string) {
        this.str = str;
    }
    public async countMostCommonChar(): Promise<string> {
        try {
            this.str = this.str.replace(/[^a-zA-Z]/g, "").toLowerCase();
            const charCounts: Record<string, number> = {};
            for (let i = 0; i < this.str.length; i++) {
                const char = this.str.charAt(i);
                charCounts[char] = (charCounts[char] || 0) + 1;
            }
            let maxCount: number = 0;
            let maxChar: string = '';
            for (const char in charCounts) {
                if (charCounts[char] > maxCount) {
                    maxCount = charCounts[char];
                    maxChar = char;
                }
            }
            return maxChar;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error in countMostCommonChar:", error.message);
            } else {
                console.error("Unknown error in countMostCommonChar");
            }
            return "";
        }
    }
}
(async () => {
    const array_problems = new ArrayProblems("Hello world, this is very basic for developers");
    console.log(await array_problems.countMostCommonChar()); // ✅ should print "e"
})();
