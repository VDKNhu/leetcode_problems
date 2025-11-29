// Array and Hashing Approach
function groupAnagrams(strs: string[]): string[][] {
    const res: Map<number, string[]> = new Map();
    for (const str of strs) {
        const arr = new Uint16Array(26);
        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - 97]++;
        }

        const hashCode = arrayHashCode(arr);
        const curStrs = res.get(hashCode) || [];
        curStrs.push(str);
        res.set(hashCode, curStrs);
    }

    return Array.from(res.values());
};

function arrayHashCode(intArray): number {
    let hash = 0;
    if (intArray.length === 0) return hash;

    for (let i = 0; i < intArray.length; i++) {
        hash = Math.imul(31, hash) + intArray[i];
        hash |= 0;
    }
    return hash;
}

// General Approach
function groupAnagramsV2(strs: string[]): string[][] {
    const res: Map<string, string[]> = new Map();
    for (const str of strs) {
        const originalStr = str.split("").sort((char1: string, char2: string) => char1.charCodeAt(0) - char2.charCodeAt(0)).join("");
        if (!res.get(originalStr)) {
            res.set(originalStr, [str]);
        } else {
            const curStrs = res.get(originalStr) || [];
            curStrs.push(str);
            res.set(originalStr, curStrs);
        }
    }

    return Array.from(res.values());
};