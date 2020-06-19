/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const output = []

  function _inorder(root) {
    if (!root) return output
    _inorder(root.left)
    output.push(root.val)
    _inorder(root.right)
  }

  _inorder(root)
  return output
}