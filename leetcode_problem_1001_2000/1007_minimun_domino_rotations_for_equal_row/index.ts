function minDominoRotations(tops: number[], bottoms: number[]): number {
    const len = tops.length;
    
    function calculateRotations(value: number): number {
        let t = 0;
        let b = 0;

        for(let index = 0; index < len; index++) {
            if(tops[index] !== value && bottoms[index] !== value) {
                return len + 1;
            }

            if(tops[index] === value) {
                t++;
            }

            if(bottoms[index] === value) {
                b++;
            }
        }

        return len - Math.max(t, b);
    }

    const rotations = Math.min(calculateRotations(tops[0]), calculateRotations(bottoms[0]));
    return rotations > len ? -1 : rotations;
};