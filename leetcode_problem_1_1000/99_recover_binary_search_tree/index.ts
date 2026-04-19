// Definition for a binary tree node.
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

function recoverTree(root: TreeNode | null): void {
    let prevNode: TreeNode | null = null, firstNode: TreeNode | null = null, secondNode: TreeNode | null = null;

    function inOrderTraversal(node: TreeNode | null): void {
        if(!node) return;

        inOrderTraversal(node.left);

        if(prevNode && prevNode.val > node.val) {
            if(!firstNode) {
                firstNode = prevNode;
            }
            secondNode = node;
        }

        prevNode = node;
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    if(firstNode && secondNode) {
        const tempValue = firstNode.val;
        firstNode.val = secondNode.val;
        secondNode.val = tempValue;
    }
}