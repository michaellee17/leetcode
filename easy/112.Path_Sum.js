/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 2025/1/2 第一次看 掌握度60% 遞迴
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
