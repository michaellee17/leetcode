/**
 * @param {string} s
 * @return {string}
 * 2025/9/25 要用中心擴散法 掌握度60%
 */
var longestPalindrome = function (s) {
  let start = 0;
  let maxLen = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let currentLen = right - left + 1;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        start = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇數長度回文
    expandAroundCenter(i, i + 1); // 偶數長度回文
  }

  return s.slice(start, start + maxLen);
};
console.log(`output->`, longestPalindrome("ac"));
