function removeAnagrams(words: string[]): string[] {
    const res: string[] = [];
    let index = 0, curKey = "";
    while(index < words.length) {
        const key = words[index].split("").sort().join("");
        if(curKey !== key) {
            res.push(words[index]);
            curKey = key;
        }
        index++;
    }

    return res;
};