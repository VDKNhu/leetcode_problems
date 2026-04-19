function minDeletionSize(strs: string[]): number {
    if(strs.length < 2) return 0;

    let deletedCount = 0;
    const numStrs = strs.length, strLen = strs[0].length;
    const sorted: boolean[] = new Array(numStrs).fill(false);

    loop:
    for(let col = 0; col < strLen; col++) {
        for(let row = 0; row < numStrs - 1; row++) {
            if(!sorted[row] && strs[row].charAt(col) > strs[row + 1].charAt(col)) {
                deletedCount++;
                continue loop;
            }
        }

        for(let row = 0; row < numStrs - 1; row++) {
            if(strs[row].charAt(col) < strs[row + 1].charAt(col)) {
                sorted[row] = true;
            }
        }
    }

    return deletedCount;
};