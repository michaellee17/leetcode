/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/8/8 這題偏簡單 掌握度90%
 */
var decompressRLElist = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    let value = nums[i + 1];
    for (let i = 1; i <= freq; i++) {
      result.push(value);
    }
  }
  return result;
};
console.log(`output->decompressRLElist`, decompressRLElist([1, 2, 3, 4]));
