function possibleStringCount(word: string): number {
    let res = 1;
    
    for(let i = word.length - 2; i >= 0; i--) {
        if(word[i] === word[i+1]) res++;
    }

    return res;
};