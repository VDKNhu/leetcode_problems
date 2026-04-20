class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]) {
        let res: number[] = [];
        res = res.concat(nums);
        res = res.concat(nums);
        return res;
    }
}
