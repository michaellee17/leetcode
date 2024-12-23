/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 2024/12/23 第一次看 掌握度 70% linked list 滿抽象的 用很多暫存再替代
 */
var removeElements = function (head, val) {
  // 定義一個新節點
  let dummy = new ListNode(0);
  // 新節點的下一個節點指向head
  dummy.next = head;
  // 定義當前節點
  let current = dummy;
  // 當當前節點的下一個節點不為空時
  while (current.next !== null) {
    // 如果當前節點的下一個節點的值等於val
    if (current.next.val === val) {
      // 當前節點的下一個節點指向下下個節點
      current.next = current.next.next;
    } else {
      // 當前節點指向下一個節點
      current = current.next;
    }
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);

console.log(
  `output->removeElements([1,2,6,3,4,5,6],6)`,
  removeElements(head, 6)
);
