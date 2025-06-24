/**
 * @param {string} s
 * @return {number[][]}
 * 2025/6/24 掌握度80%
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
console.log(`output->`, largeGroupPositions("abbxxxxxxzzy"));
