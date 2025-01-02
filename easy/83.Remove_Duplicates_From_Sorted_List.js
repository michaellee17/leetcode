/**
 * @param {ListNode} head
 * @return {ListNode}
 * Tag: Linked List
 * 2024/12/17 第一次看 掌握度80%
 * 2025/1/2 第二次看 掌握度100% 要先假設一個current指針 再由指針的移動去判斷
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) return head;

  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      //若相等就把下一個的值放到下下個
      current.next = current.next.next;
    } else {
      //若不相等就往下一個
      current = current.next;
    }
  }

  return head;
};

// 測試用例
let list = new ListNode(1, new ListNode(1, new ListNode(2)));
console.log(deleteDuplicates(list)); // 輸出: 1 -> 2
