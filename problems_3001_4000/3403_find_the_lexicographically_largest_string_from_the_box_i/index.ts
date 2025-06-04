function answerString(word: string, numFriends: number): string {
    if(numFriends === 1) {
        return word;
    }

    let result = '';
    const len = word.length;

    for(let i = 0; i < len; i++) {
        const maxLen = Math.min(len - i, len - numFriends + 1);
        const subStr = word.slice(i, i + maxLen);

        if(subStr > result) {
            result = subStr;
        }
    }

    return result;
};