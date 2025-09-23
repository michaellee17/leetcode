/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 * 2025/9/23 不難 邏輯推倒而已 掌握度90%
 * 複習Math.floor向下取整 Math.ceil向上取整 Math.round四捨五入
 */
var maxRepeating = function (sequence, word) {
  let maxCount = Math.floor(sequence.length / word.length);
  for (let i = 1; i <= maxCount + 1; i++) {
    let target = word.repeat(i);
    if (sequence.indexOf(target) === -1) return i - 1;
  }
};
console.log(`output->`, maxRepeating("ababc", "ab"));
