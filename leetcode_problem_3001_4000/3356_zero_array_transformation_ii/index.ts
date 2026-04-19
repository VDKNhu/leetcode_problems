function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length;
    const q = queries.length;
    const difArray = new Array(n + 1).fill(0);

    let left = 0;
    let right = q + 1;

    function checkZeroArray(index: number): boolean {
        difArray.fill(0);

        for(let i = 0; i < index; i++) {
            const [l, r, value] = queries[i];

            difArray[l] += value;
            if(r + 1 < n) {
                difArray[r + 1] -= value;
            }
        }

        let curSum = 0;
        for(let i = 0; i < n; i++) {
            curSum += difArray[i];

            if(nums[i] > curSum) {
                return false;
            }
        }

        return true;
    }
    
    while(left < right) {
        const mid = (left + right) >> 1;

        if(checkZeroArray(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left > q ? -1 : left;
};
