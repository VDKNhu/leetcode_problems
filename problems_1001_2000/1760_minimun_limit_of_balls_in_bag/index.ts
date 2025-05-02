function minimumSize(nums: number[], maxOperations: number): number {
    let left = 1;
    let right = Math.max(...nums);

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        let operations = 0;

        for(let num of nums) {
            operations += Math.floor((num - 1) / mid);
        }

        if(operations <= maxOperations) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};