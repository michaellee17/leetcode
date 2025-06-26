/**
 * @param {number[]} nums
 * @return {number[]}
 * 2025/6/26 不難可練習多種語法 掌握度90%
 */
var sortArrayByParityII = function (nums) {
  let evenArray = nums.filter((item) => item % 2 === 0);
  let oddArray = nums.filter((item) => item % 2 !== 0);
  // 用forEach寫
  // let result = [];
  // nums.forEach((item, index) => {
  //   if (index % 2 === 0) {
  //     result.push(evenArray.pop());
  //   } else {
  //     result.push(oddArray.pop());
  //   }
  // });
  // return result;

  // 用map寫
  // return nums.map((item, index) => {
  //   if (index % 2 === 0) {
  //     return evenArray.pop(); // 返回偶數
  //   } else {
  //     return oddArray.pop(); // 返回奇數
  //   }
  // });

  // 用reduce寫
  return nums.reduce((acc, cur, index) => {
    if (index % 2 === 0) {
      acc.push(evenArray.pop());
    } else {
      acc.push(oddArray.pop());
    }
    return acc; // 回傳累積器
  }, []);
};

console.log(`output->`, sortArrayByParityII([4, 2, 5, 7]));
