function findLexSmallestString(s: string, a: number, b: number): string {
    const len = s.length;
    const g = gcd(b, len);
    s = s + s;
    let res = s;

    function add(str: string[], start: number) {
        let times = 0, minValue = 10;
        const originalValue = Number(str[start]);
        for (let i = 0; i < 10; i++) {
            const addedValue = (originalValue + a * i) % 10;
            if (addedValue < minValue) {
                times = i;
                minValue = addedValue;
            }
        }
        for (let i = start; i < len; i+=2) {
            str[i] = ((Number(str[i]) + a * times) % 10).toString();
        }
    }

    for (let i = 0; i < len; i += g) {
        const subStr = s.substr(i, len).split("");
        add(subStr, 1);
        if (b % 2) add(subStr, 0);

        const finalSubStr = subStr.join("");
        if (finalSubStr < res) res = finalSubStr;
    }

    return res;
}

// greatest commor divisor
function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a;
}

function findLexSmallestStringV2(s: string, a: number, b: number): string {
    let res = s;
    const bfsQueue: string[] = [s];
    const visited = new Set<string>([s]);
    const len = s.length;

    while (bfsQueue.length > 0) {
        const currentStr: string = bfsQueue.shift()!;

        if (currentStr < res) {
            res = currentStr;
        }

        let addedStr = "";
        for (let i = 0; i < len; i++) {
            if (i % 2 !== 0) {
                addedStr += ((Number(currentStr[i]) + a) % 10).toString();
            } else {
                addedStr += currentStr[i];
            }
        }

        const rotatedStr = currentStr.substring(len - b) + currentStr.substring(0, len - b);
        const transformedStr = [addedStr, rotatedStr];

        for (const str of transformedStr) {
            if (!visited.has(str)) {
                bfsQueue.push(str);
                visited.add(str);
            }
        }
    }

    return res;
}