/**
 * @param {number[]} arr
 * @return {number[]}
 * 2025/8/12 這題寫的出來但是算挺複雜的
 * 1.Js number.toString(2) 轉成binary
 * 2.用map搭配輔助funciotn算出他的count
 * 3.取最大數值用Math.max
 * 4.同樣count要由小到大 所以我需要佔存temp 偷塞完然排序在塞入
 */
var sortByBits = function (arr) {
  const getOneCount = (str) => {
    let arr = str.split("");
    let count = 0;
    for (let item of arr) {
      if (item === "1") count++;
    }
    return count;
  };
  let binArr = arr.map((item) => getOneCount(item.toString(2)));
  let result = [];
  let maxCount = Math.max(...binArr);
  for (let i = 0; i <= maxCount; i++) {
    let temp = [];
    for (let j = 0; j < binArr.length; j++) {
      if (binArr[j] === i) {
        temp.push(arr[j]);
      }
    }
    temp.sort((a, b) => a - b);
    result.push(...temp);
  }
  return result;
};
console.log(`output->sortByBits()`, sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
