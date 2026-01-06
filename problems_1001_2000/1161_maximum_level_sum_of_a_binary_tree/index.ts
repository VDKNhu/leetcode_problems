class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function maxLevelSum(root: TreeNode | null): number {
    let maxLevel = 1, maxSum = -Infinity, curLevel = 1;
    const queue: TreeNode[] = [root!];

    while(queue.length > 0) {
        const len = queue.length;
        let curSum = 0;

        for(let i = 0; i < len; i++) {
            const curTree = queue.shift()!;
            curSum += curTree.val;

            if(curTree.left) {
                queue.push(curTree.left);
            }
            
            if(curTree.right) {
                queue.push(curTree.right);
            }
        }

        if(curSum > maxSum) {
            maxSum = curSum;
            maxLevel = curLevel;
        }
        curLevel++;
    }

    return maxLevel;
};