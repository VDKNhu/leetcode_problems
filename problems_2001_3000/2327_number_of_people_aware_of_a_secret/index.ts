function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 1000000007;
    const dp: number[] = new Array(n + 1).fill(0n);
    dp[1] = 1;

    for (let currentDay = 2; currentDay <= n; currentDay++) {
        let newPeople = 0;

        const earliestSharingDay = currentDay - forget + 1;
        const latestSharingDay = currentDay - delay;

        for (let day = earliestSharingDay; day <= latestSharingDay; day++) {
            if (day > 0) newPeople += dp[day];
        }

        dp[currentDay] = newPeople % MOD;
    }

    let res = 0;
    const earliestRememberingDay = n - forget + 1;
    const latestRememberingDay = n;

    for(let currentDay = earliestRememberingDay; currentDay <= latestRememberingDay; currentDay++) {
        if(currentDay > 0) res += dp[currentDay];
    }

    
    return res % MOD;
};