/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Tag: Linked List Hash_table
 * 2024/12/03 第一次看 掌握度60趴 快慢指针 了解linkedlist資料結構
 * 2024/12/17 第二次看 掌握度80趴 快慢指針
 * 2025/7/25 第三次看 掌握度80% 快慢指針 有點概念
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //若沒有head或者head的下一個 就返回false
  if (head === null || head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

//設定測試資料
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
//pos = 1
head.next.next.next.next = head.next;

console.log(`output->head`, head);

console.log(`output->hasCycle(head)`, hasCycle(head));
