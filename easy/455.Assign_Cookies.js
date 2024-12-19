/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度80% 雙指針
 * 2024/12/19 第二次看 掌握度90%
 */
var findContentChildren = function (g, s) {
  // 將孩子的貪心指數數組和餅乾的尺寸數組進行排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  // 使用雙指針方法遍歷餅乾的尺寸數組
  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      // 當前餅乾的尺寸能夠滿足當前孩子的需求
      child++;
    }
    // 無論是否滿足需求，都移動餅乾的指針
    cookie++;
  }

  return child;
};

var findContentChildren2 = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  //i是孩子的指針，j是餅乾的指針 i不會主動+ 要有滿足才會+1 最後回傳i的數量
  let i = 0;
  for (let j = 0; i < g.length && j < s.length; j++) {
    if (s[j] >= g[i]) i++;
  }
  return i;
};

// 測試範例
console.log(findContentChildren2([1, 2, 3], [1, 1])); // 輸出: 1
