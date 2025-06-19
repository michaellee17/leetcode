/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/10 第一次看 蠻複雜的 多map
 */
var findShortestSubArray = function (nums) {
  const count = new Map();
  const firstIdx = new Map();
  const lastIdx = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (!firstIdx.has(x)) {
      firstIdx.set(x, i);
    }
    lastIdx.set(x, i);
    count.set(x, (count.get(x) || 0) + 1);
  }
  console.log(`output->count`, count);
  console.log(`output->firstIdx`, firstIdx);
  console.log(`output->lastIdx`, lastIdx);
  // 計算陣列的度（最大出現次數）
  let degree = 0;
  for (let v of count.values()) {
    degree = Math.max(degree, v);
  }

  // 找出所有出現次數等於 degree 的元素，並計算最短子陣列長度
  let minLen = nums.length;
  for (let [x, c] of count.entries()) {
    if (c === degree) {
      const len = lastIdx.get(x) - firstIdx.get(x) + 1;
      minLen = Math.min(minLen, len);
    }
  }

  return minLen;
};
console.log(
  `output->findShortestSubArray([1,2,2,3,1])`,
  findShortestSubArray([1, 2, 2, 3, 1])
);
