function maximum69Number (num: number): number {
    let numStr = num.toString();
    let index = 0;

    while(index < numStr.length) {
        if(numStr.charAt(index) === '6') {
            numStr = numStr.split("").map((char, i) => i === index ? '9' : char).join("");
            return Number(numStr);
        }
        index++;
    }

    return num;
};