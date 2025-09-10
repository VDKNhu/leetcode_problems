function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    const usersNeedHelp = new Set<number>();

    for(let i = 0; i < friendships.length; i++) {
        const userIndex1 = friendships[i][0];
        const userIndex2 = friendships[i][1];

        if(!checkCollapsedArray(languages[userIndex1 - 1], languages[userIndex2 - 1])) {
            usersNeedHelp.add(userIndex1);
            usersNeedHelp.add(userIndex2);
        }
    }

    if(usersNeedHelp.size === 0) return 0;

    const languageCount = new Array(n + 1).fill(0);
    for(const i of usersNeedHelp) {
        for(const j of languages[i - 1]) {
            languageCount[j]++;
        }
    }

    const maxLanguageCount = Math.max(...languageCount);
    return usersNeedHelp.size - maxLanguageCount;
};

function checkCollapsedArray(arr1: number[], arr2: number[]): boolean {
    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if(arr2.includes(arr1[i])) return true;
        }
        return false;
    }

    for (let i = 0; i < arr2.length; i++) {
        if(arr1.includes(arr2[i])) return true;
    }
    return false;
}