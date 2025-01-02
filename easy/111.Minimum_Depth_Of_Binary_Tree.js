/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 2025/1/2 第一次看 掌握度60% 遞迴
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let min = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    min = Math.min(min, minDepth(root.left));
  }
  if (root.right) {
    min = Math.min(min, minDepth(root.right));
  }
  return min + 1;
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(`output->minDepth(root)`, minDepth(root));
