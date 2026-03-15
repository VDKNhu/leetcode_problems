function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0, right = letters.length - 1;
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if(letters[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return letters[left % letters.length];
};