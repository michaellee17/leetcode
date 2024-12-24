/**
 * Definition for singly-linked list.
 * 2024/12/24 第一次看 掌握度 50% 快慢指針
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 如果鏈表只有一個節點，則直接返回 true
  if (head.next === null) return true;

  // 定義快慢指針和前一個節點指針
  let slow = head;
  let fast = head;
  let prev = null;

  // 使用快慢指針找到鏈表的中間節點，同時反轉前半部分鏈表
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // 快指針每次移動兩步
    let temp = slow.next; // 暫存慢指針的下一個節點
    slow.next = prev; // 反轉慢指針的下一個節點指向前一個節點
    prev = slow; // 更新前一個節點為當前慢指針節點
    slow = temp; // 慢指針移動到下一個節點
  }

  // 如果鏈表節點數為奇數，跳過中間節點
  if (fast !== null) {
    slow = slow.next;
  }

  // 比較反轉後的前半部分和後半部分
  while (slow !== null) {
    if (slow.val !== prev.val) return false; // 如果值不相等，則不是回文
    slow = slow.next; // 移動慢指針到下一個節點
    prev = prev.next; // 移動前一個節點指針到下一個節點
  }
  return true;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(2);
root.next.next.next = new ListNode(1);

console.log(isPalindrome(root)); // 輸出: true
