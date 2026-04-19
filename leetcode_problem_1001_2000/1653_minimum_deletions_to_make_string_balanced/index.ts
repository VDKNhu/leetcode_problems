function minimumDeletions(s: string): number {
    const dp: number[] = new Array(s.length + 1).fill(0);
    let bCount = 0;

    for (let i = 1; i <= s.length; i++) {
        if (s[i - 1] === 'b') {
            // If current character is 'b', no additional deletion needed
            // The minimum deletions remain the same as previous position
            dp[i] = dp[i - 1];
            bCount++;
        } else {
            // If current character is 'a', we have two choices:
            // 1. Delete this 'a' (cost: dp[i-1] + 1)
            // 2. Keep this 'a' and delete all 'b's before it (cost: bCount)
            dp[i] = Math.min(bCount, dp[i - 1] + 1);
        }
    }

    return dp[s.length];
};