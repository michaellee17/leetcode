/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Tag: Array
 * 2024/12/11 第一次看 掌握度100% 先設定好預設回傳值 若找到用break終止迴圈
 * 2024/12/19 第二次看 掌握度100%
 * for... in 是用索引去跑
 * for... of 是用值去跑
 * 2025/7/28 第二次看 掌握度90% 條件判斷 迴圈break
 * 兩種方式處理:
 * 1.預設-1有找到覆蓋沒找到就回傳-1 (較優)
 * 2.設一個變數有找到就不回傳-1 沒找到就回傳-1
 */
// var nextGreaterElement = function (nums1, nums2) {
//   let result = [];
//   for (let i = 0; i < nums1.length; i++) {
//     let index = nums2.indexOf(nums1[i]);
//     //用slice複製該index後的數字組成新陣列
//     let newArray = nums2.slice(index + 1);
//     //假設找不到比nums1[i]大的數字就要回傳-1 所以先給-1
//     let nextGreater = -1;
//     for (let j = 0; j < newArray.length; j++) {
//       if (newArray[j] > nums1[i]) {
//         nextGreater = newArray[j];
//         //找到就終止迴圈了
//         break;
//       }
//     }
//     result.push(nextGreater);
//   }
//   return result;
// };

// var nextGreaterElement2 = function (nums1, nums2) {
//   let result = [];
//   for (let num of nums1) {
//     let index = nums2.indexOf(num);
//     let rightArray = nums2.slice(index + 1);
//     let target = num;
//     if (rightArray.length === 0) {
//       result.push(-1);
//     } else {
//       for (let i = 0; i < rightArray.length; i++) {
//         if (rightArray[i] > target) {
//           target = rightArray[i];
//           break;
//         }
//       }
//       if (target > num) {
//         result.push(target);
//       } else {
//         result.push(-1);
//       }
//     }
//   }
//   return result;
// };

var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  nums1.forEach((item) => {
    let start = nums2.indexOf(item);
    let found = false;
    for (let i = start + 1; i < nums2.length; i++) {
      if (nums2[i] > item) {
        result.push(nums2[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(-1);
    }
  });
  return result;
};

console.log(`output->`, nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
