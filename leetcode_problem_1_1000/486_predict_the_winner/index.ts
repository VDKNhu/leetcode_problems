function predictTheWinner(nums: number[]): boolean {
    const len = nums.length;
    const dp = Array.from({ length: len }, () => new Array(len).fill(0));

    function calculateMaxDiff(left: number, right: number): number {
        if(left > right) {
            return 0;
        }
        if(dp[left][right] === 0) {
            const chooseLeft = nums[left] - calculateMaxDiff(left + 1, right);
            const chooseRight = nums[right] - calculateMaxDiff(left, right - 1);
            dp[left][right] = Math.max(chooseLeft, chooseRight);
        }
        return dp[left][right];
    }

    return calculateMaxDiff(0, len - 1) >= 0;
};