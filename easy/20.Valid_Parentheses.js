/**
 * @param {string} s
 * @return {boolean}
 * Tag: String
 * 2024/11/15 第一次做 掌握度70% 多次刪除 條件判斷時同時操作刪除元素
 * 2024/12/16 第二次做 掌握度90% 後進先出的概念 push pop 物件查詢
 * 2024/12/31 第三次做 掌握度100%
 * 2025/6/30 第四次做 掌握度 100% 注意 當你跑到 else if (obj[stack.pop()] !== char) 會改變原陣列
 * 2025/7/18 第五次做 掌握度100%
 */
var isValid = function (s) {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let char of s) {
    console.log(`output->char`, char);
    if (obj[char]) {
      stack.push(char);
      console.log(`output->stack`, stack);
    } else if (obj[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length == 0;
};

console.log(`output->isValid('()')`, isValid("([])"));
