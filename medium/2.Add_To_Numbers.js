function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 2025/10/7 ListNode操作 進位操作 掌握度60%
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // 假頭節點
  let current = dummy;
  let carry = 0; // 進位

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    console.log(`output->sum`, sum);
    carry = Math.floor(sum / 10); // 新的進位
    current.next = new ListNode(sum % 10); // 個位數
    console.log(`output->current`, current);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // 跳過假頭
};
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(`output->`, addTwoNumbers(l1, l2));
