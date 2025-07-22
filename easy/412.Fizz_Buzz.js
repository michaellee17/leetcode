/**
 * @param {number} n
 * @return {string[]}
 * 2024/12/26 第一次看 掌握度80%
 * 2025/7/22 第二次看 掌握度90% 基本條件判斷
 */
var fizzBuzz = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }

  return answer;
};

// 測試用例
console.log(fizzBuzz(3)); // 輸出: ["1", "2", "Fizz"]
console.log(fizzBuzz(5)); // 輸出: ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(15)); // 輸出: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
