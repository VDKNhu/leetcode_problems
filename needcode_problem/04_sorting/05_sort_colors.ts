class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]) {
        let twoStartIndex = nums.length,
            zeroEndIndex = -1,
            currentIndex = 0;

        while(currentIndex < twoStartIndex) {
            if(nums[currentIndex] === 0) {
                zeroEndIndex++;
                [nums[zeroEndIndex], nums[currentIndex]] = [nums[currentIndex], nums[zeroEndIndex]];
                currentIndex++;
            } else if(nums[currentIndex] === 2) {
                twoStartIndex--;
                [nums[twoStartIndex], nums[currentIndex]] = [nums[currentIndex], nums[twoStartIndex]];
            } else {
                currentIndex++;
            }
        }
    }
}
