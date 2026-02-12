const longestBalanced = (s: string): number => {
   const isBalanced = (map: Map<string, number>): boolean => { 
        const num = map.values().next().value;
        for (const value of map.values()) {
            if (value !== num) {
                return false;
            }
        }
        return true;
    }

    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const map = new Map<string, number>(); 
        map.set(s[i], 1);

        for (let j = i + 1; j <= s.length; j++) {
            if (j - i > max && isBalanced(map)) {
                max = j - i;
            }
            if (j < s.length) {
                map.set(s[j], (map.get(s[j]) ?? 0) + 1);
            }
        }
    }

    return max;
};