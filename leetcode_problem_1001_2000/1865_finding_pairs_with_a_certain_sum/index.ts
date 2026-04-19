class FindSumPairs {
    private el1: number[];
    private el2: number[];
    private freq2: Map<number, number> = new Map();

    constructor(nums1: number[], nums2: number[]) {
        this.el1 = nums1;
        this.el2 = nums2;

        for(const num of nums2) {
            this.freq2.set(num, (this.freq2.get(num) || 0) + 1);
        }
    }

    add(index: number, val: number): void {
        const value = this.el2[index];
        this.freq2.set(value, (this.freq2.get(value) || 0) - 1);
        this.freq2.set(value + val, (this.freq2.get(value + val) || 0) + 1);
        this.el2[index] += val;
    }

    count(tot: number): number {
        return this.el1.reduce((acc: number, cur: number) => {
            if(cur >= tot) return acc;
            return acc + (this.freq2.get(tot - cur) || 0);
        }, 0);
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */