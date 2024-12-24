/**
 * 2024//12/24 第一次看 掌握度60% 遞迴
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  if (root === null) return result;
  dfs(root, "", result);
  return result;
};

var dfs = function (node, path, result) {
  if (node === null) return;
  path += node.val;
  //終止條件
  if (node.left === null && node.right === null) {
    result.push(path);
    return;
  }
  path += "->";
  dfs(node.left, path, result);
  dfs(node.right, path, result);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// Test case
let root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3)
);
