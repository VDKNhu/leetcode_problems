function maxDiff(num: number): number {
    const numStr = num.toString();
    let maxIndex = 0, minIndex = 0;

    let index = 0;
    while(index < numStr.length) {
        if(numStr[index] !== '9') {
            maxIndex = index;
            break;
        }
        index++;
    }

    index = 0;
    while(index < numStr.length) {
        if(
            (index === 0 && numStr[index] !== '1') || 
            (index > 0 && numStr[index] !== '0' && numStr[index] !== '1')
        ) {
            minIndex = index;
            break;
        }
        index++;
    }

    const max = Number(numStr.replaceAll(numStr[maxIndex], '9'));
    const min = Number(minIndex === 0 
        ? numStr.replaceAll(numStr[minIndex], '1') 
        : minIndex >= numStr.length 
            ? num 
            : numStr.replaceAll(numStr[minIndex], '0'));
            
    return max - min;
};
