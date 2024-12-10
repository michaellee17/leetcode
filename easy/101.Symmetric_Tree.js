/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Tag: Tree Depth-first Search Breadth-first Search 陣列操作
 * 2024/12/07 第一次看 掌握度60% BFS
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  let queue = [root.left, root.right];

  while (queue.length) {
    let t1 = queue.shift();
    let t2 = queue.shift();

    if (!t1 && !t2) continue;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;

    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }

  return true;
};

// 測試範例
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // 輸出: true
