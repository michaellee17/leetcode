/**
 * @param {string} word
 * @return {number}
 * 2025/9/25 偏難 掌握度60%
 */
var minTimeToType = function (word) {
  let current = 0; // 'a' 的位置
  let totalTime = 0;

  for (let char of word) {
    let target = char.charCodeAt(0) - "a".charCodeAt(0);

    // 計算圓形距離
    let clockwise = Math.abs(target - current);
    let counterclockwise = 26 - clockwise;
    let minDistance = Math.min(clockwise, counterclockwise);

    totalTime += minDistance + 1; // 移動時間 + 打字時間
    current = target;
  }

  return totalTime;
};
console.log(`output->`, minTimeToType("abc"));
