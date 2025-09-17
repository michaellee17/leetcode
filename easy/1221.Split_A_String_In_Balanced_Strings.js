/**
 * @param {string} s
 * @return {number}
 * 2025/9/17 寫得出來但效能不好 要研究一下 掌握度80% 
 * 研究後發現專注在balabce的處理就好
 * 不用去算我的result是啥 只要計個數即可
 */
var balancedStringSplit = function(s) {
  let count = 0
  let balance = 0
  for(let i = 0; i < s.length; i++){
    if(s[i] === 'R') balance++
    if(s[i] === 'L') balance--
    if(balance === 0) count++
  }
  return count
};
console.log(balancedStringSplit("RLRRLLRLRL"))