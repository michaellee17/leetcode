/**
 * @param {number[]} score
 * @return {string[]}
 * Tag: Array
 * 2024/12/11 第一次看 掌握度80% Map觀念 解構賦值不改變原陣列 map紀錄排名
 * 2024/12/19 第二次看 掌握度100%
 */
var findRelativeRanks2 = function (score) {
  const sorted = [...score].sort((a, b) => b - a);
  const map = new Map();
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      map.set(sorted[i], "Gold Medal");
    } else if (i === 1) {
      map.set(sorted[i], "Silver Medal");
    } else if (i === 2) {
      map.set(sorted[i], "Bronze Medal");
    } else {
      map.set(sorted[i], (i + 1).toString());
    }
  }
  return score.map((s) => map.get(s));
};

var findRelativeRanks = function (score) {
  //這邊用解構賦值是因為要複製一份score的陣列，不然直接sort會改變原本的陣列(原本的陣列還要用到) 短路評估
  let sorted = [...score].sort((a, b) => b - a);
  console.log(`output->sorted`, sorted);
  let map = new Map();

  const rankObj = {
    0: "Gold Medal",
    1: "Silver Medal",
    2: "Bronze Medal",
  };

  const len = sorted.length;
  for (let i = 0; i < len; i++) {
    //如果i在rankObj裡面，就取rankObj[i]，不然就取i+1
    map.set(sorted[i], rankObj[i] || (i + 1).toString());
  }
  console.log(`output->map`, map);
  return score.map((num) => map.get(num));
};

console.log(`output->findRelativeRanks`, findRelativeRanks([10, 3, 8, 9, 4]));
