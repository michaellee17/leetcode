/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 * 2025/9/1 題目偏難理解 掌握度70%
 */
var canFormArray = function (arr, pieces) {
  // 建立哈希表：piece第一個元素 -> 完整piece
  const map = new Map();
  for (let piece of pieces) {
    map.set(piece[0], piece);
  }
  console.log(`output->map`, map);
  let i = 0;
  while (i < arr.length) {
    if (!map.has(arr[i])) return false;

    const piece = map.get(arr[i]);
    console.log(`output->piece`, piece);
    // 檢查piece是否完全匹配
    for (let j = 0; j < piece.length; j++) {
      if (arr[i + j] !== piece[j]) return false;
    }
    i += piece.length;
  }

  return true;
};
console.log(`output->`, canFormArray([15, 88], [[88], [15]]));
