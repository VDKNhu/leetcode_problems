function largestPerimeter(nums: number[]): number {
    nums.sort((edge1: number, edge2: number) => edge2 - edge1);

    for(let i = 2; i < nums.length; i++) {
        const largestEdge = nums[i - 2];
        const midEdge = nums[i - 1];
        const shortestEdge = nums[i];

        if(largestEdge < midEdge + shortestEdge) {
            return largestEdge + midEdge + shortestEdge;
        }
    }

    return 0;
}