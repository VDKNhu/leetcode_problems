function maxFreqSum(s: string): number {
    const vowels = ["a", "e", "i", "u", "o"];
    const freq = s.split("").reduce((acc, cur) => {
        if(!(cur in acc)) {
            acc[cur] = 1;
        } else {
            acc[cur]++;
        }

        return acc;
    }, {} as Record<string, number>);

    const vowelFreq = Object.keys(freq).filter(key => vowels.includes(key)).map(key => freq[key]);
    const consonantFreq = Object.keys(freq).filter(key => !vowels.includes(key)).map(key => freq[key]);
    const maxFreqVowel = vowelFreq.length === 0 ? 0 : Math.max(...vowelFreq);
    const maxFreqConsonant = consonantFreq.length === 0 ? 0 : Math.max(...consonantFreq);

    return maxFreqVowel + maxFreqConsonant
};