/**
 * @param {number[]} nums
 * @return {number}
 * 2025/6/4 第一次看 條件判斷 array.sort Math.max運用 掌握度80%
 * 2025/7/14 第二次看 條件判斷 array.sort會改變原陣列所以不用重新宣告變數 Math.max運用 掌握度80%
 *
 */
var maximumProduct = function (nums) {
  // 將陣列排序
  nums.sort((a, b) => a - b);

  // 最大的三個數字的乘積
  let max1 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  // 最小的兩個負數和最大的正數的乘積
  let max2 = nums[0] * nums[1] * nums[nums.length - 1];

  // 回傳兩者的最大值
  return Math.max(max1, max2);
};

// 解法2：單次遍歷找最大最小值（最優解）
// 時間複雜度：O(n)，空間複雜度：O(1)
var maximumProduct2 = function (nums) {
  // 初始化最大和最小值
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  let min1 = Infinity,
    min2 = Infinity;

  for (let num of nums) {
    // 更新最大值
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    // 更新最小值
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  // 比較兩種情況：三個最大值 vs 兩個最小值×一個最大值
  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

// 解法3：使用 Math.max 和 Math.min 的簡化版本
var maximumProduct3 = function (nums) {
  // 找出最大的三個數
  let max1 = Math.max(...nums);
  let max2 = Math.max(...nums.filter((x) => x !== max1));
  let max3 = Math.max(...nums.filter((x) => x !== max1 && x !== max2));

  // 找出最小的兩個數
  let min1 = Math.min(...nums);
  let min2 = Math.min(...nums.filter((x) => x !== min1));

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

// 解法4：使用 reduce 方法
var maximumProduct4 = function (nums) {
  // 找出最大的三個數
  const maxNums = nums.reduce((acc, num) => {
    if (acc.length < 3) {
      acc.push(num);
      acc.sort((a, b) => b - a);
    } else if (num > acc[2]) {
      acc[2] = num;
      acc.sort((a, b) => b - a);
    }
    return acc;
  }, []);

  // 找出最小的兩個數
  const minNums = nums.reduce((acc, num) => {
    if (acc.length < 2) {
      acc.push(num);
      acc.sort((a, b) => a - b);
    } else if (num < acc[1]) {
      acc[1] = num;
      acc.sort((a, b) => a - b);
    }
    return acc;
  }, []);

  return Math.max(
    maxNums[0] * maxNums[1] * maxNums[2],
    minNums[0] * minNums[1] * maxNums[0]
  );
};

console.log(`output-maximunProduct([1,2,3])`, maximumProduct([4, 1, 2, 3]));
console.log(`解法2:`, maximumProduct2([4, 1, 2, 3]));
console.log(`解法3:`, maximumProduct3([4, 1, 2, 3]));
console.log(`解法4:`, maximumProduct4([4, 1, 2, 3]));

// 測試更多案例
console.log(`\n測試案例 [1,2,3,4]:`);
console.log(`解法1:`, maximumProduct([1, 2, 3, 4]));
console.log(`解法2:`, maximumProduct2([1, 2, 3, 4]));

console.log(`\n測試案例 [-1,-2,-3]:`);
console.log(`解法1:`, maximumProduct([-1, -2, -3]));
console.log(`解法2:`, maximumProduct2([-1, -2, -3]));

console.log(`\n測試案例 [-4,-3,-2,-1,60]:`);
console.log(`解法1:`, maximumProduct([-4, -3, -2, -1, 60]));
console.log(`解法2:`, maximumProduct2([-4, -3, -2, -1, 60]));
