/**
 * @param {string} s
 * @return {number[][]}
 * 2025/6/24 掌握度80%
 * 2025/7/16 第二次看 掌握度80%
 * 2025/7/24 第三次 掌握度90% 條件判斷與重製變數
 */
var largeGroupPositions = function (s) {
  let res = [];

  let i = 0;

  while (i < s.length) {
    let start = i;
    while (i < s.length && s[i] === s[start]) {
      i++;
    }
    if (i - start >= 3) {
      res.push([start, i - 1]);
    }
  }

  return res;
};
var largeGroupPositions = function (s) {
  let start = 0;
  let currentLength = 1;
  const result = [];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentLength++;
    } else {
      if (currentLength >= 3) {
        result.push([start, i - 1]);
      }
      start = i;
      currentLength = 1;
    }
  }
  // 最後一段：不需要 hasDiff
  if (currentLength >= 3) {
    result.push([start, s.length - 1]);
  }
  return result;
};
console.log(`output->`, largeGroupPositions("abbxxxxxxzzy"));
