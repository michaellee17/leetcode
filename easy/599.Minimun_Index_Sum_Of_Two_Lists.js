/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 2025/6/4 第一次做 掌握度70% 用object做還行 用map做還不太熟
 * 第一次看到定義成Infinity方便比小
 *
 */
// var findRestaurant = function (list1, list2) {
//   let seen = {};
//   list1.forEach((item, index) => {
//     if (list2.indexOf(item) !== -1) {
//       seen[item] = index + list2.indexOf(item);
//     }
//   });
//   if (Object.keys(seen).length === 1) {
//     return [Object.keys(seen)[0]];
//   } else {
//     // 找出最小的索引和
//     let minIndexSum = Math.min(...Object.values(seen));
//     // 回傳所有符合最小索引和的餐廳名稱
//     return Object.keys(seen).filter((key) => seen[key] === minIndexSum);
//   }
// };

var findRestaurant = function (list1, list2) {
  //still 20ms beating 51%
  var indexes = new Map();

  for (let i = 0; i < list1.length; i++) indexes.set(list1[i], i);
  console.log(`output->indexes`, indexes);
  var result = [];
  var leastSum = Infinity;
  for (let i = 0; i < list2.length; i++) {
    var list1Index = indexes.get(list2[i]);
    console.log(`output->list1Index`, list1Index);
    if (list1Index === undefined) continue;

    var count = list1Index + i;
    console.log(`output->count`, count);
    if (count < leastSum) {
      //比較最小的index合
      result = [list2[i]]; //如果比到將這個值放到回傳中
      leastSum = count; //如果比到更新最小值
    } else if (count === leastSum) result.push(list2[i]); //處理並列的情況
  }

  return result;
};

console.log(
  `output->`,
  findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])
);
