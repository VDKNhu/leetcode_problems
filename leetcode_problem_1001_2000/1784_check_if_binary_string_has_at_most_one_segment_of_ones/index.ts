function checkOnesSegment(s: string): boolean {
    if(!s.includes('0')) {
        return true;
    }

    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '0') {
            if(s.slice(i).includes('1')) {
                return false;
            } else {
                return true;
            }
        }
    }

    return true;
};