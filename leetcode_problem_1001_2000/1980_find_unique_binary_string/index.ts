function findDifferentBinaryString(nums: string[]): string {
    let decimalNums: Set<number> = new Set<number>();
    for(const num of nums) {
        decimalNums.add(parseInt(num, 2));
    }

    const len = nums[0].length;
    const maxCount = (2 ** len) - 1;
    for(let i = 0; i < maxCount; i++) {
        if(!decimalNums.has(i)) {
            return i.toString(2).padStart(len, '0');
        }
    }

    return '1';
}

// Binary approach
function findDifferentBinaryStringV2(nums: string[]): string {
    const len = nums[0].length;
    let usedOneCounts: number = 0;

    for(const binaryString of nums) {
        const oneCounts = binaryString.split("").filter((char: string) => char === '1').length;
        usedOneCounts |= 1 << oneCounts;
    }

    for(let i = 0; ; i++) {
        if(((usedOneCounts >> i) & 1) === 0) {
            return '1'.repeat(i) + '0'.repeat(len - i);
        }
    }
}