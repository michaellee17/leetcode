/**
 * @param {number} x
 * @return {boolean}
 * Tag: Math
 * 2024/12/04 第一次看 掌握度80% 學到Math.floor()的用法
 * 2024/12/12 第一次看 掌握度90% 回文推斷 要搭配例子去理解
 * 2024/12/31 第三次看 掌握度100% 理解遞迴內的原理 預存原始數字
 * 20/5 = 4 20%5 = 0 /是取得商數 %是取得餘數 這不常用容易搞混 要記一下
 */
function isPalindrome(x) {
  // 複數，或是結尾是 0 的可以先排除
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  //新數字
  let reversed = 0;

  //原始數字先存起來 最後在比較
  let original = x;

  // 翻轉數字
  while (original > 0) {
    //翻轉數字取十位數以上的數字
    //reverserd * 10 為了進位 再加上原始數字的個位數
    reversed = reversed * 10 + (original % 10);
    //原始數字除以10 去個位數
    //original = Math.floor(original / 10) 去個位數
    original = Math.floor(original / 10);
  }

  return x === reversed;
}

console.log(`output->`, isPalindrome(121));
