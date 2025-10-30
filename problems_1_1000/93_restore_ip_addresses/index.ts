function restoreIpAddresses(s: string): string[] {
    const len = s.length, segments: string[] = [];
    let res: string[] = [];

    function dfs(index: number) {
        if(index >= len && segments.length === 4) {
            res.push(segments.join("."));
            return;
        }

        if(index >= len || segments.length === 4) {
            return;
        }

        let curValue = 0;
        for(let end = index; end < index + 3 && end < len; ++end) {
            curValue = curValue * 10 + s[end].charCodeAt(0) - '0'.charCodeAt(0);

            if(curValue > 255 || (end > index && s[index] === '0')) {
                break;
            }

            segments.push(curValue.toString());
            dfs(end + 1);
            segments.pop();
        }
    }

    dfs(0);
    return res;
};