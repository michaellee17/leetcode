/**
 * @param {number[]} arr
 * @return {boolean}
 * 2025/8/5 寫得出來 掌握度90%
 * 觀念整理:
 * new Set([1,2,3,4,5]) 是這樣的結構 所以不用解構 有時候會搞混
 * 遍歷Object跟Map的比較
 *  for...in 遍歷屬性名稱 (keys)
  for (let key in obj) {
      console.log(key); // "a", "b", "c"
      console.log(obj[key]); // 1, 2, 3
  }

   Object 沒有內建 iterator，不能直接用 for...of
   需要用 Object.entries()
  for (let [key, value] of Object.entries(obj)) {
      console.log(key, value); // "a" 1, "b" 2, "c" 3
  }
  for (let key in map) {
      console.log(key); // "size", "clear", "delete"... (Map的方法)
  }

  // for...of 遍歷實際的鍵值對（這才是我們要的）
  for (let [key, value] of map) {
      console.log(key, value); // "a" 1, "b" 2, "c" 3
  }
 *
 *
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  arr.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  let counts = [];
  for (let [key, value] of map) {
    counts.push(map.get(key));
  }
  return counts.length === new Set(counts).size;
};
console.log(`output->uniqueOccurrences`, uniqueOccurrences([1, 2, 2, 1, 1, 3]));
