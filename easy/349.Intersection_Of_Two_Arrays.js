/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Tag: Array
 * 2024/12/10 第一次看 掌握度100% set filter set.has
 * 2024/12/18 第二次看 掌握度100%
 * 2025/7/28 第三次看 掌握度100% 多種解法 set object
 * set轉回array用 [...s]
 */
// var intersection = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   return [...set1].filter((num) => set2.has(num));
// };
// var intersection = function (nums1, nums2) {
//   let s = new Set();
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         s.add(nums1[i]);
//       }
//     }
//   }
//   return [...s];
// };
// var intersection = function(nums1, nums2) {
//     let result = []
//     for(let i =0;i<nums1.length; i++){
//         for(let j=0;j<nums2.length;j++){
//             if(nums1[i] === nums2[j] && !result.includes(nums1[i])){
//                 result.push(nums1[i])
//             }
//         }
//     }
//     return result
// };
var intersection = (nums1, nums2) => {
  let hash = {};
  let result = [];
  for (let num of nums1) {
    hash[num] = true;
  }
  for (let num of nums2) {
    if (hash[num]) {
      result.push(num);
      hash[num] = false;
    }
  }
  return result;
};

console.log(
  `output->intersection([1,2,2,1],[2,2])`,
  intersection([1, 2, 2, 1], [2, 2])
);
