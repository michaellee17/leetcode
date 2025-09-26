/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 2025/9/26 題意都很難看懂 掌握度40%
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let result = "";
  let n = s.length;
  let cycleLen = 2 * numRows - 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < n; j += cycleLen) {
      result += s[j + i];
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < n) {
        result += s[j + cycleLen - i];
      }
    }
  }

  return result;
};
console.log(`output->convert('')`, convert("PAYPALISHIRING", 3));
