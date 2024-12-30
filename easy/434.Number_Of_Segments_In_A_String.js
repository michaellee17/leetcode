/**
 * @param {string} s
 * @return {number}
 * 2024/12/27 第一次看 掌握度80% filter運用
 */
var countSegments = function (s) {
  let words = s.split(" ").filter((w) => w !== "");

  return words.length;
};
