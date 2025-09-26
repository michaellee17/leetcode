/**
 * @param {string} s
 * @return {number}
 * 2025/9/26 第一次做medium 有點難 掌握度70%
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    //刪除重複的字直到沒有
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};
console.log(`output->`, lengthOfLongestSubstring("pwwkew"));
