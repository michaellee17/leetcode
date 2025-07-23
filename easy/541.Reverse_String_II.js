/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * 2025/07/23 第一次看 掌握度60% 還蠻難的 方法2比較好理解
 * js String 的slice 跟 substring 的差別
 * slice 不包含結尾 可接受負數(從尾巴數過來) 不會交換
 * substring 不包含結尾 不接受負數 參數自動調整subString(2,5) 等於 subString(5,2)
 */
// var reverseStr = function (s, k) {
//   let arr = s.split("");
//   for (let i = 0; i < arr.length; i += 2 * k) {
//     let left = i;
//     console.log(`output->left`, left);
//     let right = Math.min(i + k - 1, arr.length - 1);
//     console.log(`output->right`, right);
//     while (left < right) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//       right--;
//     }
//   }
//   return arr.join("");
// };
var reverseStr = function (s, k) {
  let arr = [];
  for (let i = 0; i < s.length; i += k) {
    arr.push(s.slice(i, i + k)); //slice 不包含結尾
    //arr.push(s.substring(i, i + k)); //substring 不包含結尾
  }
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join("");
};
console.log(`output->reverseStr`, reverseStr("abcdefg", 2));
