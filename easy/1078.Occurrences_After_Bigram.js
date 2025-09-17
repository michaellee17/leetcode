/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 * 2025/9/17 簡單字串切割後比較推入 掌握度100%
 */
var findOcurrences = function(text, first, second) {
    let arr = text.split(' ')
    let result = []
    for(let i=2;i<arr.length;i++){
      if(arr[i-2] === first && arr[i-1] === second){
        result.push(arr[i])
      }
    }
    return result
};
console.log(`output->findOcurrences()`,findOcurrences("alice is a good girl she is a good student",'a','good'))