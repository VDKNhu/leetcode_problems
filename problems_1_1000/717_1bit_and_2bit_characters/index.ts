function isOneBitCharacterGeneral(bits: number[]): boolean {
    const len = bits.length;
    let i = 0;
    while(i < len) {
        if(bits[i] === 1 && i + 2 < len) {
            i += 2;
        } else if(bits[i] === 1) {
            return false;
        } else {
            i++;
        }
    }
    return true;
};

function isOneBitCharacter(bits: number[]): boolean {
    for(let i = 0; i < bits.length; i++){
        if(i == bits.length-1) return true;
        if(bits[i] == 1) i++;
    }
    return false
};