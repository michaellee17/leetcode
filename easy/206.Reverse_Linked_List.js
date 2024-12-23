/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 2024/12/20 第一次看 掌握度 50% linked list 滿抽象的 用很多暫存再替代
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //定義反轉鍊表
  let prev = null;
  //定義當前節點
  let current = head;
  while (current !== null) {
    //定義下一個節點
    let nextTemp = current.next;
    //當前節點的下一個節點指向prev
    current.next = prev;
    //prev指向當前節點
    prev = current;
    //當前節點指向下一個節點
    current = nextTemp;
  }
  return prev;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(`output->reverseList(head)`, reverseList(head));
