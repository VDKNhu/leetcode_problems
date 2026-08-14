function maximumLengthSubstring(s: string): number {
    let left = 0, res = 0;
    const freq = new Array(26).fill(0);

    for(let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 97;
        freq[index]++;
        
        if(freq[index] > 2) {
            while(freq[index] > 2) {
                const leftIndex = s.charCodeAt(left) - 97;
                freq[leftIndex]--;
                left++;
            }
        }
        res = Math.max(res, right - left + 1);
    }

    return res;
};