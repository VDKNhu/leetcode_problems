/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    function findSubtreeWithAllDeepest(node: TreeNode | null): [TreeNode | null, number] {
        if(!node) {
            return [null, 0];
        }

        const [leftSubTree, leftDepth] = findSubtreeWithAllDeepest(node.left);
        const [rightSubTree, rightDepth] = findSubtreeWithAllDeepest(node.right);

        if(leftDepth > rightDepth) {
            return [leftSubTree, leftDepth + 1];
        }

        if(rightDepth > leftDepth) {
            return [rightSubTree, rightDepth + 1];
        }

        return [node, leftDepth + 1];
    }

    return findSubtreeWithAllDeepest(root)[0];
};