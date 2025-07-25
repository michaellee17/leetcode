/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 2024/12/18 第一次看 掌握度70%
 * 2025/7/25 第二次看 掌握度70%
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    console.log(pointerA);
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

//設定測試資料
let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = new ListNode(8);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

let headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = headA.next.next;
getIntersectionNode(headA, headB);

// console.log(
//   `output->getIntersectionNode(headA, headB)`,
//   getIntersectionNode(headA, headB)
// );
