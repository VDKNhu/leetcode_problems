function findKthBit(n: number, k: number): string {
    function dfs(n: number, k: number): number {
        if(k === 1) {
            return 0; 
        }

        if((k & (k - 1)) === 0) {
            return 1;
        }

        const nLen = 1 << n;
        if(k * 2 < nLen - 1) {
            return dfs(n - 1, k);
        } else {
            return dfs(n - 1, nLen - k) ^ 1;
        }
    }

    return dfs(n, k).toString();
};