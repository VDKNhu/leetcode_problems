function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    const reservedSeatsByRow: Map<number, number> = new Map();

    for(const [row, seat] of reservedSeats) {
        const currentMask = reservedSeatsByRow.get(row) ?? 0;
        const seatBit = 1 << (10 - seat);
        reservedSeatsByRow.set(row, currentMask | seatBit);
    }

    let res = (n - reservedSeatsByRow.size) * 2;
    const leftGroupMask = 0b0111100000;
    const rightGroupMask = 0b0000011110;
    const middleGroupMask = 0b0001111000;
    const familyGroupMasks = [leftGroupMask, rightGroupMask, middleGroupMask];
    for(let [row, reservedMask] of reservedSeatsByRow) {
        for(const positionMask of familyGroupMasks) {
            if((reservedMask & positionMask) === 0) {
                reservedMask |= positionMask;
                res++;
            }
        }
    }
    return res;
};