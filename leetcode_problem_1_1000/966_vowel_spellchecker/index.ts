function spellchecker(wordlist: string[], queries: string[]): string[] {
    const exactWords = new Set<string>(wordlist);
    const caseInsensitiveMap = new Map<string, string>();
    const vowelPatternMap = new Map<string, string>();

    function replaceVowels(s: string): string {
        let pattern = "";
        for(const char of s) {
            if("aeiou".includes(char)) {
                pattern += "*";
            } else {
                pattern += char;
            }
        }
        return pattern;
    }

    for(const word of wordlist) {
        const caseInsensitiveWord = word.toLowerCase();
        if(!caseInsensitiveMap.has(caseInsensitiveWord)) {
            caseInsensitiveMap.set(caseInsensitiveWord, word);
        }

        const pattern = replaceVowels(caseInsensitiveWord);
        if(!vowelPatternMap.has(pattern)) {
            vowelPatternMap.set(pattern, word);
        }
    }
    
    const result: string[] = [];
    for(const query of queries) {
        if(exactWords.has(query)) {
            result.push(query);
            continue;
        }

        const caseInsensitiveQuery = query.toLowerCase();
        if(caseInsensitiveMap.has(caseInsensitiveQuery)) {
            result.push(caseInsensitiveMap.get(caseInsensitiveQuery) as string);
            continue;
        }

        const pattern = replaceVowels(caseInsensitiveQuery);
        if(vowelPatternMap.has(pattern)) {
            result.push(vowelPatternMap.get(pattern) as string);
            continue;
        }

        result.push("");
    }

    return result;
};