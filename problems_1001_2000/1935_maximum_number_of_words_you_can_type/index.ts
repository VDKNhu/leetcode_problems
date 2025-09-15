function canBeTypedWords(text: string, brokenLetters: string): number {
    let words = text.split(" ");
    for (const letter of brokenLetters) {
        words = words.filter((word: string) => !word.includes(letter));
    }

    return words.length;
};