/**
 * @param {string} s
 * @return {boolean}
 * Tag: String
 * 2024/11/15 第一次做 掌握度70% 多次刪除 條件判斷時同時操作刪除元素
 * 2024/12/16 第二次做 掌握度90% 先進先出的概念 push pop 物件查詢
 */
var isValid = function (s) {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let char of s) {
    //如果符合obj裡的key就把key放進stack
    if (obj[char]) stack.push(char);
    //如果由obj的key值指向value不符合就回傳false
    //pop()會把最後一個元素拿掉 改變原本的陣列
    else if (obj[stack.pop()] !== char) return false;
  }
  //如果stack裡面沒有元素代表全部符合 回傳true
  //要處單一元素的情況才要判斷長度 不然可以直接回傳true
  return stack.length == 0;
};

console.log(`output->isValid('()')`, isValid("([])"));
