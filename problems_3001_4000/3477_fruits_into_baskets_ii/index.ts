function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    let res = fruits.length;
    const visited = new Array(fruits.length).fill(false);
    
    for(const fruit of fruits) {
        for(let i = 0; i < baskets.length; i++) {
            if(!visited[i] && baskets[i] >= fruit) {
                visited[i] = true;
                res--;
                break;
            }
        }
    }

    return res;
};