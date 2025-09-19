/**
 * @param {string} s
 * @return {number}
 * 2025/9/18 卡在怎麼移動 掌握度70%
 * 使用雙迴圈分別計算之前沒有用過這種技巧
 */
var maxScore = function (s) {
  let max = 0;

  for (let i = 1; i < s.length; i++) {
    let leftZeros = 0;
    let rightOnes = 0;

    // 計算左邊 '0' 的數量
    for (let j = 0; j < i; j++) {
      if (s[j] === "0") leftZeros++;
    }

    // 計算右邊 '1' 的數量
    for (let j = i; j < s.length; j++) {
      if (s[j] === "1") rightOnes++;
    }

    max = Math.max(max, leftZeros + rightOnes);
  }

  return max;
};
console.log(`output->`, maxScore("011101"));
