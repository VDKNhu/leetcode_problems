function maxDistanceV1(s: string, k: number): number {
    function findMaxDistance (dir1: string, dir2: string): number {
        let currentDistance = 0;
        let maxDistance = 0;
        let substitutionCount = 0;

        for(const char of s) {
            if(char === dir1 || char === dir2) {
                currentDistance++;
            } else if(substitutionCount < k) {
                substitutionCount++;
                currentDistance++;
            } else {
                currentDistance--;
            }

            maxDistance = Math.max(maxDistance, currentDistance)
        }

        return maxDistance;
    }

    const maxNW = findMaxDistance("N", "W");
    const maxNE = findMaxDistance("N", "E");
    const maxSW = findMaxDistance("S", "W");
    const maxSE = findMaxDistance("S", "E");

    return Math.max(maxNW, maxNE, maxSW, maxSE);
};

function maxDistanceV2(s: string, k: number): number {
    let latitude = 0;
    let longitude = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "N":
                longitude++;
                break;
            case "S":
                longitude--;
                break;
            case "E":
                latitude++;
                break;
            case "W":
                latitude--;
                break;
        }

        const distance = Math.min(Math.abs(longitude) + Math.abs(latitude) + 2 * k, i + 1);
        res = Math.max(res, distance);
    }

    return res;
};