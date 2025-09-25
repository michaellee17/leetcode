/**
 * @param {string} s
 * @return {string}
 * 2025/9/23 遞迴蠻難理解的 掌握度40%
 */
var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";

  const chars = new Set(s);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!chars.has(char.toLowerCase()) || !chars.has(char.toUpperCase())) {
      const left = longestNiceSubstring(s.substring(0, i));
      const right = longestNiceSubstring(s.substring(i + 1));
      return left.length >= right.length ? left : right;
    }
  }

  return s;
};
console.log(`output->`, longestNiceSubstring("YazaAay"));
