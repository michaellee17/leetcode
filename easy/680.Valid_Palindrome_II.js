/**
 * @param {string} s
 * @return {boolean}
 * 2025/6/10 第一次看 蠻複雜的還需要用輔助函數 掌握度30%
 * 2025/7/23 第二次看 還是蠻抽象的 掌握度40%
 */
var validPalindrome = function (s) {
  // 輔助函式：判斷子字串是否是回文
  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // 嘗試刪除左指針或右指針的字符
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true; // 如果完全匹配，則是回文
};

console.log(validPalindrome("abca")); // 輸出 true
console.log(validPalindrome("racecar")); // 輸出 true
console.log(validPalindrome("abc")); // 輸出 false
