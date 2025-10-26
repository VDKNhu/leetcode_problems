function longestSubsequenceRepeatedK(s: string, k: number): string {
    function isValidPattern(pattern: string): boolean {
        let patternIndex = 0, count = k;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === pattern[patternIndex]) {
                patternIndex++;

                if (patternIndex === pattern.length) {
                    count--;

                    if (count === 0) return true;
                    patternIndex = 0;
                }
            }
        }
        return false;
    }

    const freq: number[] = new Array(26).fill(0);
    for (const char of s) {
        freq[char.charCodeAt(0) - 97]++;
    }

    const validatedChars: string[] = [];
    for (let i = 0; i < 26; i++) {
        if (freq[i] >= k) {
            validatedChars.push(String.fromCharCode(i + 97));
        }
    }

    let res = '', queue = [''];
    while (queue.length > 0) {
        const curStr = queue.shift();

        for (const char of validatedChars) {
            const nextStr = curStr + char;
            if (isValidPattern(nextStr)) {
                queue.push(nextStr);
                res = nextStr;
            }
        }
    }

    return res;
};