class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number) {
        let i1 = 0, i2 = 0;
        let mTmp = m;
        
        while(i2 < n && i1 < mTmp) {
            if(nums1[i1] <= nums2[i2]) {
                i1++;
            } else {
                let i = i1 + m < n + m ? i1 + m : n + m - 1;
                while(i > i1) {
                    nums1[i] = nums1[i - 1];
                    i--;
                }
                nums1[i1] = nums2[i2];
                i2++;
                mTmp++;
            }
        }

        while(i2 < n) {
            nums1[i1] = nums2[i2];
            i1++;
            i2++;
        }
    }
}
