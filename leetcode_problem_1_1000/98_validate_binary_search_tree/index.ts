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

let prevNode: TreeNode | null = null;

function validateValidBST(node: TreeNode): boolean {
    if(!node) return true;

    if(!validateValidBST(node.left!)) return false;

    if(prevNode && prevNode.val >= node.val) return false;

    prevNode = node;
    return validateValidBST(node.right!);
}

function isValidBST(root: TreeNode | null): boolean {
    prevNode = null;

    return validateValidBST(root!);
};