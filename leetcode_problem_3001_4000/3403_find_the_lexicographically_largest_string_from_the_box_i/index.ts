function answerString(word: string, numFriends: number): string {
    if(numFriends === 1) {
        return word;
    }

    let result = '';
    const len = word.length;

    for(let i = 0; i < len; i++) {
        const endIndex = Math.min(len, len - numFriends + i + 1);
        const subStr = word.substring(i, endIndex);

        if(subStr > result) {
            result = subStr;
        }
    }

    return result;
};