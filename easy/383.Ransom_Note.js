/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 2024/12/26 第一次看 掌握度90% Map操作
 * 2025/07/22 第二次看 掌握度90% Object操作
 * 觀念物區:並不需要轉換成操作，直接用string就可以遍例但不能用forEach(這是物件方法)，我們可以使用for(let c of magazine
 * ),for x in 用來取索引或key for x of 用來取值
 * 2025/7/28 第三次看掌握度100% 語法優化和安全性較高的語法整理
 * 1.for (let item of magazine) {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    }改成
    for(let item of magazine){
        map.set(item,(map.get(item) || 0) + 1)
    }
    利用||省去if else 是非常易讀且簡明的方法 ||為邏輯或運算子 如果左邊是fasly 就回傳右邊的值
  2.if (map.get(item) >= 1) {}改成if (map.has(item) && map.get(item) > 0) {}較容易維護

 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();
  for (let item of magazine) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }
  for (let item of ransomNote) {
    if (map.has(item) && map.get(item) > 0) {
      map.set(item, map.get(item) - 1);
    } else {
      return false;
    }
  }
  return true;
};
var canConstruct = function (ransomNote, magazine) {
  let obj = {};
  for (let c of ransomNote) {
    obj[c] = (obj[c] || 0) + 1;
  }
  for (let c of magazine) {
    if (obj[c]) obj[c]--;
  }
  // 檢查 obj 裡有沒有還沒被消耗完的字母
  for (let key in obj) {
    if (obj[key] > 0) return false;
  }
  return true;
};
console.log(canConstruct("aa", "aab"));
