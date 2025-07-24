/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 2025/6/24 寫得出來 提起重複程式碼 優化 掌握度90%
 * 2025/7/24 寫得出來 arr.push() arr.pop()
 */
// var backspaceCompare = function (s, t) {
//   let sResult = s
//     .split("")
//     .reduce((acc, cur) => {
//       if (cur !== "#") {
//         acc.push(cur);
//       } else {
//         acc.pop();
//       }
//       return acc;
//     }, [])
//     .reduce((acc, cur) => acc + cur, "");
//   let tResult = t
//     .split("")
//     .reduce((acc, cur) => {
//       if (cur !== "#") {
//         acc.push(cur);
//       } else {
//         acc.pop();
//       }
//       return acc;
//     }, [])
//     .reduce((acc, cur) => acc + cur, "");
//   return sResult === tResult;
// };
// var backspaceCompare = function (s, t) {
//   const format = (item) => {
//     return item
//       .split("")
//       .reduce((acc, cur) => {
//         cur === "#" ? acc.pop() : acc.push(cur);
//         return acc;
//       }, [])
//       .join();
//   };
//   return format(s) === format(t);
// };
var backspaceCompare = function (s, t) {
  const action = (str) => {
    let result = [];
    for (let item of str) {
      if (item !== "#") {
        result.push(item);
      } else {
        result.pop();
      }
    }
    return result.join("");
  };
  return action(s) === action(t);
};
console.log(`output->backspaceCompare()`, backspaceCompare("ab#c", "ad#c"));
