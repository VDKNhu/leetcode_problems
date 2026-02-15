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

function balanceBST(root: TreeNode | null): TreeNode | null {
    const sortedValues: number[] = [];
    function inorderTraveral(node: TreeNode | null): void {
        if(!node) return;

        inorderTraveral(node.left);
        sortedValues.push(node.val);
        inorderTraveral(node.right);
    }

    function buildBalanceBST(start: number, end: number): TreeNode | null {
        if(start > end) return null;

        const mid = (start + end) >> 1;
        const leftSubTree = buildBalanceBST(start, mid - 1);
        const rightSubTree = buildBalanceBST(mid + 1, end);
        return new TreeNode(sortedValues[mid], leftSubTree, rightSubTree);
    }

    inorderTraveral(root);
    return buildBalanceBST(0, sortedValues.length - 1);
};