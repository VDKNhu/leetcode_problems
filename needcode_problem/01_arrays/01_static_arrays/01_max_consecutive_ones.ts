class Solution010101 {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]) {
        let maxDistance = 0;
        let curDistance = 0;

        for(const num of nums) {
            if(num === 1) {
                curDistance++;
                maxDistance = Math.max(maxDistance, curDistance);
            } else {
                curDistance = 0;
            }
        }

        return maxDistance;
    }
}
