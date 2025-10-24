function nextBeautifulNumber(n: number): number {
    function isBeautifulNumber(num: number): boolean {
        const freq: number[] = new Array(10).fill(0);
        while(num > 0) {
            const remaining = num % 10;
            freq[remaining] += 1;
            num = Math.floor(num / 10);
        }

        for(let i = 0; i < 10; i++) {
            if(freq[i] && freq[i] !== i) return false;
        }

        return true;
    }

    let k = n + 1;
    while(k <= 1224444) {
        if(isBeautifulNumber(k)) return k;
        k++;
    }

    return -1;
}