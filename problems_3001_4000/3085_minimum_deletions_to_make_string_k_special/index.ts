function minimumDeletionsV1(word: string, k: number): number {
    const mapFreq: number[] = new Array(26).fill(0);

    for(const char of word) {
        mapFreq[char.charCodeAt(0) - 97]++;
    }

    const arrFreq: number[] = mapFreq.filter((freq: number) => freq > 0);

    const calDeletions = (minFreq: number): number => {
        let deletions = 0;

        for(const freq of arrFreq) {
            if(freq < minFreq) {
                deletions += freq;
            } else if(freq > minFreq + k) {
                deletions += freq - minFreq - k;
            }
        }
        
        return deletions;
    }

    return Math.min(...Array.from({length: word.length + 1}, (_, i) => calDeletions(i)));
}

function minimumDeletionsV2(word: string, k: number): number {
    const mapFreq: number[] = new Array(26).fill(0);
    let minDeletions: number = Infinity;

    for (const char of word) {
        mapFreq[char.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        const minFreq = mapFreq[i];
        if (minFreq === 0) continue;

        let del = 0;
        for (let j = 0; j < 26; j++) {
            if(i === j) continue;

            if(mapFreq[j] === 0) continue;

            if(mapFreq[j] < minFreq) {
                del += mapFreq[j];
            } else if(mapFreq[j] > minFreq + k) {
                del += mapFreq[j] - minFreq - k;
            }

            if(del > minDeletions) break;
        }

        minDeletions = Math.min(minDeletions, del);
    }

    return minDeletions;
}
