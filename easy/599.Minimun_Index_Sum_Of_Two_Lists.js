/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 2025/6/4 第一次做 掌握度70% 用object做還行 用map做還不太熟
 * 第一次看到定義成Infinity方便比小
 * 2025/7/11 第二次看 掌握度80% 物件方法的運用
 * 2025/7/28 第三次看 掌握度90%
 * 1.用map紀錄list1出現次數
 * 2.再用sumMap當list2有出現map中有紀錄的key時 將index相加 存入sumMap
 * 3.遍歷找出最小值
 * 4.遍歷推入等於最小值的key
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

// var findRestaurant = function (list1, list2) {
//   //still 20ms beating 51%
//   var indexes = new Map();

//   for (let i = 0; i < list1.length; i++) indexes.set(list1[i], i);
//   console.log(`output->indexes`, indexes);
//   var result = [];
//   var leastSum = Infinity;
//   for (let i = 0; i < list2.length; i++) {
//     var list1Index = indexes.get(list2[i]);
//     console.log(`output->list1Index`, list1Index);
//     if (list1Index === undefined) continue;

//     var count = list1Index + i;
//     console.log(`output->count`, count);
//     if (count < leastSum) {
//       //比較最小的index合
//       result = [list2[i]]; //如果比到將這個值放到回傳中
//       leastSum = count; //如果比到更新最小值
//     } else if (count === leastSum) result.push(list2[i]); //處理並列的情況
//   }

//   return result;
// };

var findRestaurant = function (list1, list2) {
  let obj = {};
  for (let i = 0; i < list1.length; i++) {
    if (list2.indexOf(list1[i]) !== -1) {
      obj[list1[i]] = i + list2.indexOf(list1[i]);
    }
  }
  console.log(Object.values(obj));
  let minIndexSum = Math.min(...Object.values(obj)); //解構以供比較
  return Object.keys(obj).filter((key) => obj[key] === minIndexSum); //使用陣列方法找出出符合的
};

// var findRestaurant = function (list1, list2) {
//   let map = new Map();
//   list1.forEach((item, index) => {
//     map.set(item, index);
//   });
//   let sumMap = new Map();
//   list2.forEach((item, index) => {
//     if (map.has(item)) {
//       sumMap.set(item, map.get(item) + index);
//     }
//   });
//   let result = [];
//   let minValue = Infinity;
//   for (let [key, value] of sumMap) {
//     if (value < minValue) {
//       minValue = value;
//     }
//   }
//   for (let [key, value] of sumMap) {
//     if (sumMap.get(key) === minValue) {
//       result.push(key);
//     }
//   }
//   return result;
// };

console.log(
  `output->`,
  findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])
);
