function sumFourDivisors(nums: number[]): number {
    function getTotalDivisors(num: number): number {
        let divisorCount = 2, totalDivisors = num + 1;

        for(let d = 2; d * d <= num; d++) {
            if(num % d === 0) {
                divisorCount++;
                totalDivisors += d;

                if(d * d < num) {
                    divisorCount++;
                    totalDivisors += num / d;
                }
            }
        }

        return divisorCount === 4 ? totalDivisors : 0;
    }

    let res = 0;
    for(const num of nums) {
        res += getTotalDivisors(num);
    }

    return res;
}