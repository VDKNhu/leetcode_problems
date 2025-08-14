function largestGoodInteger(num: string): string {
    let maxValue = "";
    for(let i = 0; i < num.length - 2; i++) {
        if(num[i] === num[i + 1] && num[i + 1] === num[i + 2]) maxValue = maxValue < num[i] ? num[i] : maxValue;
    }

    return maxValue.length > 0 ? maxValue.repeat(3) : maxValue;
};