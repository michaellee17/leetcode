/**
 * 2024/12/20 第一次看 掌握度 60 % 遞迴 很抽象
 * 2025/1/2 第二次看 掌握度 70% 遞迴
 *
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return dfsHeight(root) !== -1;
};

var dfsHeight = function (root) {
  if (root === null) {
    return 0;
  }

  let leftHeight = dfsHeight(root.left);
  if (leftHeight === -1) {
    return -1;
  }

  let rightHeight = dfsHeight(root.right);
  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(`output->isBalanced(root)`, isBalanced(root));
