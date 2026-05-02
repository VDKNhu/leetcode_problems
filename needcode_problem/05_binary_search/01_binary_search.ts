class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number) {
        let startIndex = 0,
            endIndex = nums.length;
        while(startIndex < endIndex) {
            const pivot = Math.floor((startIndex + endIndex) / 2);
            if(nums[pivot] < target) {
                startIndex = pivot + 1;
            } else if(nums[pivot] > target) {
                endIndex = pivot;
            } else {
                return pivot;
            }
        }
        return -1;
    }
}
