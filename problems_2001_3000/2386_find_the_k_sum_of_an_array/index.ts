function kSum(nums: number[], k: number): number {
    const len = nums.length;
    let maxSum = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            maxSum += nums[i];
        } else {
            nums[i] *= -1;
        }
    }

    nums.sort((num1: number, num2: number) => num1 - num2);

    const minHeap: [number, number][] = [];

    function pushHeap(item: [number, number]) {
        minHeap.push(item);
        let index = minHeap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (minHeap[index][0] < minHeap[parentIndex][0]) {
                [minHeap[index], minHeap[parentIndex]] = [minHeap[parentIndex], minHeap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    function popHeap(): [number, number] {
        const min = minHeap[0];
        const last = minHeap.pop()!;

        if (minHeap.length > 0) {
            minHeap[0] = last;
            let index = 0;

            while (true) {
                let minIndex = index;
                const left = 2 * index + 1, right = 2 * index + 2;

                if (left < minHeap.length && minHeap[left][0] < minHeap[minIndex][0]) {
                    minIndex = left;
                }

                if (right < minHeap.length && minHeap[right][0] < minHeap[minIndex][0]) {
                    minIndex = right;
                }

                if (index !== minIndex) {
                    [minHeap[index], minHeap[minIndex]] = [minHeap[minIndex], minHeap[index]];
                    index = minIndex;
                } else {
                    break;
                }
            }
        }

        return min;
    }

    pushHeap([0, 0]);
    while (--k) {
        const [curReduction, curIndex] = popHeap();
        
        if (curIndex < len) {
            pushHeap([curReduction + nums[curIndex], curIndex + 1]);

            if (curIndex > 0) {
                pushHeap([curReduction + nums[curIndex] - nums[curIndex - 1], curIndex + 1]);
            }
        }
    }

    return maxSum - minHeap[0][0];
}