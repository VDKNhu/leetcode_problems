function clearStars(s: string): string {
    const len = s.length;
    const indexGroups: number[][] = Array.from({ length: 26 }, () => []);
    const removals: boolean[] = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
        if (s[i] === "*") {
            for (let j = 0; j < 26; j++) {
                if (indexGroups[j].length > 0) {
                    removals[indexGroups[j].pop()!] = true;
                    break;
                }
            }
            removals[i] = true;
        } else {
            indexGroups[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(i);
        }
    }

    console.log(indexGroups)
    return s.split("").filter((_, index) => !removals[index]).join("");
};