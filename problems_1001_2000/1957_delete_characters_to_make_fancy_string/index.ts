function makeFancyString(s: string): string {
    let res = '', index = 0, prev = '', count = 0;
    while(index < s.length) {
        if(s[index] === prev) {
            count++;
        } else {
            prev = s[index];
            count = 1;
        }

        if(s[index + 1] !== s[index]) {
            res += count >= 2 ? s[index] + s[index] : s[index]
        }
        index++;
    }

    return res;
};