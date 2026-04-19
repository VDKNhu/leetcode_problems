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

function sumNodes(node: TreeNode | null): number {
    if (!node) return 0;
    return node.val + sumNodes(node.left) + sumNodes(node.right);
}

function maxProduct(root: TreeNode | null): number {
    const MOD = 1e9 + 7;
    const sum = sumNodes(root);
    let res = 0;

    function maxProductDFS(node: TreeNode | null): number {
        if (!node) return 0;

        const curSum = node.val + maxProductDFS(node.left) + maxProductDFS(node.right);
        if (curSum < sum) {
            res = Math.max(res, (sum - curSum) * curSum);
        }

        return curSum;
    }

    maxProductDFS(root);

    return res % MOD;
};