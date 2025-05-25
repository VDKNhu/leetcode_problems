function longestPalindrome(words: string[]): number {
    const mapWords: Record<string, number> = {};
    let maxLen = 0;
    let hasDouble = false;

    for(const word of words) {
        mapWords[word] = (mapWords[word] ?? 0) + 1;
    }

    for(const word in mapWords) {
        const revWord = word[1] + word[0];

        if(revWord in mapWords && word !== revWord) {
            const min = Math.min(mapWords[word], mapWords[revWord]);
            mapWords[word] -= min;
            mapWords[revWord] -= min;
            maxLen += min * 4;
        } else if(word === revWord) {
            const wordFreq = Math.floor(mapWords[word] / 2);
            mapWords[word] -= wordFreq * 2;
            maxLen += wordFreq * 4;

            if(mapWords[word] > 0) {
                hasDouble = true
            }
        }
    }

    return maxLen + (hasDouble ? 2 : 0)
}