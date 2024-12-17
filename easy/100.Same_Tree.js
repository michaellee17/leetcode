/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Tag: Tree Depth-first Search
 * 2024/12/17 第一次看 掌握度60% DFS
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 如果兩個節點都是 null，則它們是相同的
  if (p === null && q === null) return true;

  // 如果一個節點是 null 而另一個不是，則它們不同
  if (p === null || q === null) return false;

  // 如果兩個節點的值不同，則它們不同
  if (p.val !== q.val) return false;

  // 遞歸比較左子樹和右子樹
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 定義二元樹節點
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

// 範例二元樹 2:
//     1
//    / \
//   2   3
let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// 測試 isSameTree 函數
console.log(isSameTree(tree1, tree2)); // 輸出: true
// 創建兩個不同的二元樹
// 範例二元樹 3:
//     1
//    /
//   2
let tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);

// 範例二元樹 4:
//     1
//      \
//       2
let tree4 = new TreeNode(1);
tree4.right = new TreeNode(2);

// 測試 isSameTree 函數
console.log(isSameTree(tree3, tree4)); // 輸出: false
