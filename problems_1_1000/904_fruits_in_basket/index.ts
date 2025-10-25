function totalFruit(fruits: number[]): number {
    const fruitSet = new Map<number, number>();
    let res = 0, start = 0;

    for(let end = 0; end < fruits.length; end++) {
        const curFruit = fruits[end];
        const curCount = fruitSet.get(curFruit) || 0;
        fruitSet.set(curFruit, curCount + 1);

        while(fruitSet.size > 2) {
            const startFruilt = fruits[start];
            const startCount = fruitSet.get(startFruilt) || 0;
            fruitSet.set(startFruilt, startCount - 1);

            if(fruitSet.get(startFruilt) === 0) {
                fruitSet.delete(startFruilt);
            }
            start++;
        }

        res = Math.max(res, end - start + 1);
    }

    return res;
}