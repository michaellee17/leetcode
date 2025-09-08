/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 * 2025/9/5 蠻難的 掌握度60%
 */
var findRotation = function (mat, target) {
  const n = mat.length;

  // 檢查是否相等
  function isEqual(a, b) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  }

  // 旋轉90度
  function rotate90(matrix) {
    let rotated = Array(n)
      .fill()
      .map(() => Array(n));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = matrix[i][j];
      }
    }
    return rotated;
  }

  let current = mat;

  // 檢查0°、90°、180°、270°
  for (let i = 0; i < 4; i++) {
    if (isEqual(current, target)) return true;
    current = rotate90(current);
  }

  return false;
};
console.log(
  `output->findRotation()`,
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ]
  )
);
