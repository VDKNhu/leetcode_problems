function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let res = 0;

    while(left < right) {
        const curArea = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(res, curArea);

        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return res;
}