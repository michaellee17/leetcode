/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 2024/12/17 第一次看 掌握度70% 用遞迴來解
 * 如果把左節點和右節點的位置固定不動，那麼根節點放在左節點的左邊，稱為前序（pre-order）、根節點放在左節點和右節點的中間，稱為中序（in-order）、根節點放在右節點的右邊，稱為後序（post-order）。
 * 2025/1/2 第二次看 掌握度80%
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  const inorder = (node) => {
    if (node === null) return;
    //左邊先
    inorder(node.left);
    //中間
    result.push(node.val);
    //右邊後
    inorder(node.right);
  };

  inorder(root);
  return result;
};

// 定義二元樹節點
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
console.log(`output->root`, root);
// 測試 inorderTraversal 函數
console.log(inorderTraversal(root)); // 輸出: [1, 3, 2]
