function doesAliceWin(s: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(const char of s) {
        if(vowels.includes(char)) return true;
    }

    return false;
};

function doesAliceWinV1(s: string): boolean {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelLen = s.split("").reduce((acc: number, cur: string) => vowels.includes(cur) ? acc + 1 : acc, 0);

    if(vowelLen === 0) return false;

    if(vowelLen === 1) return true;

    // Alice: 1, Bob: -1;
    return checkDoesAliceWin(vowelLen, 1);
};

function checkDoesAliceWin(len: number, turn: number): boolean {
    if (turn === 1) {
        if (len < 3 || len % 2 === 1) return true;
        return checkDoesAliceWin(len - 1, turn * -1);
    } else {
        if (len < 2 || len % 2 === 0) return false;
        return checkDoesAliceWin(len - 2, turn * -1);
    }
}