/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 2025/6//24 Math.min Math.abs 掌握度80%
 * 2025/7/16 第二次看 掌握度80%
 * 2025/724/第三次看 掌握度90%  Math.min可以快速比較 距離可以用Math.abs來取
 * 技巧: 設置Infinity用來比小 設置-Infinity用來比大
 */
var shortestToChar = function (s, c) {
  // 先取得目標字所有的位置
  let indexArray = [];
  // s.split("").forEach((item, index) => {
  //   if (item === c) {
  //     indexArray.push(index);
  //   }
  // });
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexArray.push(i);
    }
  }

  let resultArray = [];
  let length = s.length;

  for (let i = 0; i < length; i++) {
    // 計算 i 到所有目標字符的距離，取最小值
    let minDistance = Infinity; //設為無限大 方便比小
    for (let index of indexArray) {
      minDistance = Math.min(minDistance, Math.abs(i - index));
    }
    resultArray.push(minDistance);
  }

  return resultArray;
};

console.log(`output->`, shortestToChar("loveleetcode", "e"));
