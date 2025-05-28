function getLongestSubsequence(words: string[], groups: number[]): string[] {
    let prevGroup = -1;
    const res: string[] = [];

    for(let index = 0; index < words.length; index++) {
        if (groups[index] !== prevGroup) {
            res.push(words[index]);
            prevGroup = groups[index];
        }
    }

    return res;
};

