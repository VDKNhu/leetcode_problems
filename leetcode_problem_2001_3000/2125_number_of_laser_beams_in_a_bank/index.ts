function numberOfBeams(bank: string[]): number {
    let res = 0, prev = 0;
    for(const items of bank) {
        const devices = items.split("").filter((item: string) => item === '1').length;
        if(!prev) {
            prev = devices;
            continue;
        }

        if(devices) {
            res += prev * devices;
            prev = devices;
        }
    }

    return res;
};