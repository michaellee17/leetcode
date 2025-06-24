/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * 2025/6/24 掌握度70%
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 判斷是否不重疊
  return !(
    (
      rec1[2] <= rec2[0] || // rec1 的右邊界在 rec2 的左邊界的左側
      rec1[0] >= rec2[2] || // rec1 的左邊界在 rec2 的右邊界的右側
      rec1[3] <= rec2[1] || // rec1 的上邊界在 rec2 的下邊界的下方
      rec1[1] >= rec2[3]
    ) // rec1 的下邊界在 rec2 的上邊界的上方
  );
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])); // 輸出 true
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 1, 2, 2])); // 輸出 false
