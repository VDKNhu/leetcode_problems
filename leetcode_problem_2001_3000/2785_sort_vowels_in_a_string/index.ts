function sortVowels(s: string): string {
    const consonants = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const res: string[] = [];
    const sortedVowels = s.split("").filter((char: string) => consonants.includes(char)).sort();

    let vowelIndex = 0;
    for(const char of s) {
        if(consonants.includes(char)) {
            res.push(sortedVowels[vowelIndex]);
            vowelIndex++;
        } else {
            res.push(char);
        }
    }

    return res.join("");
};