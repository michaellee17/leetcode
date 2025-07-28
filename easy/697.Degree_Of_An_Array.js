/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/10 第一次看 蠻複雜的 多map
 * 2025/7/14 第二次看 掌握度70% 還是頗難要記錄每個數字出現的次數 第一次和最後一次出現的位子 最短的長度 需要包含第一個出現根最後一個出現的位子
 * 2025/7/28 第三次看 寫得出來 注意效能 掌握度90%
 */

// var findShortestSubArray = function (nums) {
//   const count = new Map(); // 記錄每個數字出現次數
//   const firstIdx = new Map(); // 記錄每個數字第一次出現的位置
//   const lastIdx = new Map(); // 記錄每個數字最後一次出現的位置

//   for (let i = 0; i < nums.length; i++) {
//     const x = nums[i];
//     if (!firstIdx.has(x)) {
//       firstIdx.set(x, i); // 第一次出現就記錄下來
//     }
//     lastIdx.set(x, i); // 每次都更新為最新出現的位置
//     count.set(x, (count.get(x) || 0) + 1); // 出現次數+1
//   }
//   console.log(`output->count`, count);
//   console.log(`output->firstIdx`, firstIdx);
//   console.log(`output->lastIdx`, lastIdx);

//   // 計算陣列的度（最大出現次數）
//   let degree = 0;
//   for (let v of count.values()) {
//     degree = Math.max(degree, v);
//   }

//   // 找出所有出現次數等於 degree 的元素，並計算最短子陣列長度
//   let minLen = nums.length;
//   for (let [x, c] of count.entries()) {
//     if (c === degree) {
//       const len = lastIdx.get(x) - firstIdx.get(x) + 1;
//       console.log(`output->len`, len);
//       minLen = Math.min(minLen, len);
//     }
//   }

//   return minLen;
// };

// var findShortestSubArray = function (nums) {
//   let obj = {};
//   for (let item of nums) {
//     obj[item] = (obj[item] || 0) + 1;
//   }
//   let max = Math.max(...Object.values(obj));
//   console.log(`output->max`, max);
//   let min = Infinity;
//   for (let [key, value] of Object.entries(obj)) {
//     if (value === max) {
//       let length =
//         nums.lastIndexOf(Number(key)) - nums.indexOf(Number(key)) + 1;
//       min = Math.min(min, length);
//     }
//   }
//   return min;
// };

var findShortestSubArray = function (nums) {
  let count = {};
  let firstIndex = {};
  let lastIndex = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (firstIndex[num] === undefined) {
      firstIndex[num] = i;
    }
    lastIndex[num] = i;
    count[num] = (count[num] || 0) + 1;
  }

  let degree = Math.max(...Object.values(count));
  let minLength = Infinity;

  for (let num in count) {
    if (count[num] === degree) {
      let length = lastIndex[num] - firstIndex[num] + 1;
      minLength = Math.min(minLength, length);
    }
  }

  return minLength;
};

console.log(
  `output->findShortestSubArray([1,2,2,3,1])`,
  findShortestSubArray([1, 2, 2, 3, 1])
);
