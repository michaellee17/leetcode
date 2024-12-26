/**
 * Definition for a binary tree node.
 * 2024/12/26 第一次看 掌握度80% DFS 遞迴
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  if (!root) return 0;
  if (root.left && !root.left.left && !root.left.right) {
    sum += root.left.val;
  }
  sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  return sum;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// Test case
let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(sumOfLeftLeaves(root)); // 24
