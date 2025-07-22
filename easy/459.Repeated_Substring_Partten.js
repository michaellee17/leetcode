/**
 * @param {string} s
 * @return {boolean}
 * 2024/12/30 第一次看 掌握度70%
 * string.slice(start, end) 方法可从字串中返回选定的元素。
 * slice(1, -1) 从第一個元素开始，到倒數第二個元素结束
 * ex: '1234'.slice(1, -1) => '23'
 * 2025/7/9 第二次看 掌握度90% js.string.repeat(3) 重複三次
 * 2025/7/22 第三次看 掌握度90% 如果他可以被重複，一定從第一位開始重複(觀念誤區)
 */
var repeatedSubstringPattern = function (s) {
  let t = (s + s).slice(1, -1);
  return t.includes(s);
};

var repeatedSubstringPattern = function (s) {
  const n = s.length;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    //能整除的i才有意義
    if (n % i === 0) {
      //假設的字斷
      let sub = s.slice(0, i);
      console.log(sub);
      //重複到跟s一樣長
      let repeated = sub.repeat(n / i);
      //若完全等於才回傳
      if (repeated === s) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  `output->repeatedSubstringPattern`,
  repeatedSubstringPattern("abab")
);
