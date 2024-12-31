/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 2024/12/31 第一次看 掌握度80% sort
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let list = [];

  // 遍歷 list1
  while (list1 !== null) {
    list.push(list1.val);
    list1 = list1.next;
  }

  // 遍歷 list2
  while (list2 !== null) {
    list.push(list2.val);
    list2 = list2.next;
  }

  // 排序
  list.sort((a, b) => a - b);

  // 將排序後的數組轉換回鏈表
  let dummy = new ListNode();
  let current = dummy;
  for (let val of list) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
};

// Test
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
console.log(`output->`, mergeTwoLists(list1, list2));
