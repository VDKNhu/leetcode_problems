function uniformArray(nums1: number[]): boolean {
    let minOddValue = Number.MAX_SAFE_INTEGER;
    for(const num of nums1) {
        if(num % 2 === 1) {
            minOddValue = Math.min(minOddValue, num);
        }
    }

    for(const num of nums1) {
        if(num % 2 === 0 && minOddValue !== Number.MAX_SAFE_INTEGER && num < minOddValue) {
            return false;
        }
    }
    return true;
};