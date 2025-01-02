/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Tag: Array
 * 2024/11/14 第一次看 掌握度70%
 * 語法splice()
 * 第一個參數是移除或加入的起始位置
 * 第二個參數是移除的長度
 * 第三個參數是加入的元素
 * 2024/12/17 第二次看 掌握度90%
 * 2025/1/2 第三次看 掌握度90%
 */

//不用return 只要修改nums1
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

var merge2 = function (nums1, m, nums2, n) {
  let i = m - 1; //nums1的最後一個index
  let j = n - 1; //nums2的最後一個index
  let k = m + n - 1; //合併後的最後一個索引

  //當i,j都大於等於0時
  while (i >= 0 && j >= 0) {
    //若nums1的值大於nums2的值
    if (nums1[i] > nums2[j]) {
      //將nums1的值放到合併後的最後一個索引
      nums1[k] = nums1[i];
      //nums1的最後一個索引往前移
      i--;
      //若nums2的值大於nums1的值
    } else {
      //將nums2的值放到合併後的最後一個索引
      nums1[k] = nums2[j];
      //nums2的最後一個索引往前移
      j--;
    }
    //合併後的最後一個索引往前移
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};

console.log(
  `output->merge([1,2,3,0,0,0],3,[2,5,6],3)`,
  merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
);
