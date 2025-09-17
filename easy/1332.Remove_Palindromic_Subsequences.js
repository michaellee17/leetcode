/**
 * @param {string} s
 * @return {number}
 * 2025/9/17 不是很值觀 掌握度70%
 */
var removePalindromeSub = function (s) {
  // 檢查是否為回文
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 2; // 不是回文，需要2次
    }
    left++;
    right--;
  }
  return 1; // 是回文，只需要1次
};
console.log(`output->`, removePalindromeSub("ababa"));
