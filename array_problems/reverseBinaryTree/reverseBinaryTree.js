/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Reverses (inverts) a binary tree.
 * Approach: Recursive Depth-First Search (DFS)
 * Time Complexity: O(n) - where n is the number of nodes in the tree, as we visit each node once.
 * Space Complexity: O(h) - where h is the height of the tree (O(n) in worst case, O(log n) for balanced tree) due to the call stack.
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    // Base case: if the node is null, return null
    if (root === null) {
        return null;
    }

    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively call for left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

// Example usage:
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
// const inverted = invertTree(tree);
