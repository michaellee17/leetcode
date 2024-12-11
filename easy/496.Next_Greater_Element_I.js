/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Tag: Array
 * 2024/12/11 第一次看 掌握度100% 先設定好預設回傳值 若找到用break終止迴圈
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    //用slice複製該index後的數字組成新陣列
    let newArray = nums2.slice(index + 1);
    //假設找不到比nums1[i]大的數字就要回傳-1 所以先給-1
    let nextGreater = -1;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] > nums1[i]) {
        nextGreater = newArray[j];
        //找到就終止迴圈了
        break;
      }
    }
    result.push(nextGreater);
  }
  return result;
};

console.log(`output->`, nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
