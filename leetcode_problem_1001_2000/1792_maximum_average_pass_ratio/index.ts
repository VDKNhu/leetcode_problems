import { PriorityQueue } from 'priority-queue-library';

interface ClassInfo {
    pass: number;
    total: number;
}

function calcPotentialIncrease(classInfo: ClassInfo): number {
    return (classInfo.pass + 1) / (classInfo.total + 1) - classInfo.pass / classInfo.total;
}

function maxAverageRatio(classes: ClassInfo[], extraStudents: number): number {
    const pq = new PriorityQueue<(number | ClassInfo)[]>({
        comparator: function(a, b) {
            return a[0] - b[0];
        }
    });

    for(const info of classes) {
        const potentialIncrease = calcPotentialIncrease(info);
        pq.push([potentialIncrease, info]);
    }

    while(extraStudents > 0) {
        const [potential, classInfo] = pq.pop();
        let {pass, total} = classInfo as ClassInfo;

        classInfo.pass++;
        classInfo.total++;

        const newPotentialIncrease = calcPotentialIncrease(classInfo);
        pq.push([newPotentialIncrease, classInfo]);

        extraStudents--;
    }

    let res = 0;
    while(pq.length > 0) {
        const [_, classInfo] = pq.pop();
        let {pass, total} = classInfo as ClassInfo; 

        res += pass / total;
    }

    return res / classes.length;
};

// ref: https://algo.monster/liteproblems/1792
