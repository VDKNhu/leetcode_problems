function readBinaryWatch(turnedOn: number): string[] {
    if(turnedOn === 0) {
        return ["0:00"];
    }

    const TOTAL_BITS = 10;
    const res: string[] = [];
    const ledStates: boolean[] = new Array(TOTAL_BITS).fill(false);

    const convertTime = (): [number, number] => {
        const hours = ledStates.slice(0, 4).reduce((acc: number, bit: boolean) => {
            return (acc << 1) | Number(bit);
        }, 0);

        const minutes = ledStates.slice(4).reduce((acc: number, bit: boolean) => {
            return (acc << 1) | Number(bit);
        }, 0);

        return [hours, minutes];
    }

    const generateCombinators = (index: number, remainder: number): void => {
        if(index + remainder > TOTAL_BITS || remainder === 0) {
            return;
        }

        ledStates[index] = true;
        if(remainder === 1) {
            const [hours, minutes] = convertTime();
            if(hours < 12 && minutes < 60) {
                const time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; 
                res.push(time);
            }
        }

        generateCombinators(index + 1, remainder - 1);
        ledStates[index] = false;
        generateCombinators(index + 1, remainder);
    }

    generateCombinators(0, turnedOn);
    return res;
};