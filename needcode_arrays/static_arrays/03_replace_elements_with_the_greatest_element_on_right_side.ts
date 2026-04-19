class Solution03 {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]) {
        let curMax = Math.max(...arr);
        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length - 1) {
                arr[i] = -1;
            } else {
                curMax = arr[i] === curMax ? Math.max(...arr.slice(i + 1)) : curMax;
                arr[i] = curMax;
            }
        }
        return arr;
    }
}
