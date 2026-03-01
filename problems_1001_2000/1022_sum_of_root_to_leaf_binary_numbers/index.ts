
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


function sumRootToLeaf(root: TreeNode | null): number {
    function calSumRootToLeaf(node: TreeNode | null, curSum: number): number {
        if(node === null) {
            return 0;
        }

        const { val, left, right } = node;
        const newSum = (curSum << 1) | val;
        if(left === null && right === null) {
            return newSum;
        }

        return calSumRootToLeaf(left, newSum) + calSumRootToLeaf(right, newSum);
    }

    return calSumRootToLeaf(root, 0);
};