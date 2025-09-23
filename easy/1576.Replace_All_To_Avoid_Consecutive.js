/**
 * @param {string} s
 * @return {string}
 * 2025/9/23 蠻多觀念會運用在這一題 掌握度60%
 * 1.字串不能直接修改(前面有遇到過 再次複習)
 * 2.選用 abc三個字母的原因是 只比問號出現的 前後 所以可能是 a?a a?b b?a 這樣 所以c
 * 就可以加入 這樣比就可以了 只要比較前後是否相同
 * 3.js for loop continue即跳過這迴圈 只有當都沒被跳過的時候才去寫入
 * 4.js for loop break 當寫到一次就可以結束了
 * 5.stirng 轉 array split('') array轉string join('')
 * 6.像這樣continue是同early return 的原理 之前沒這樣用過可以學起來
 */
var modifyString = function (s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") {
      // 嘗試 a, b, c
      for (let char of ["a", "b", "c"]) {
        // 檢查是否與前一個字符相同
        if (i > 0 && arr[i - 1] === char) continue;
        // 檢查是否與後一個字符相同
        if (i < arr.length - 1 && arr[i + 1] === char) continue;
        // 找到合適的字符
        arr[i] = char;
        break;
      }
    }
  }

  return arr.join("");
};
console.log(`output->`, modifyString("?zs"));
