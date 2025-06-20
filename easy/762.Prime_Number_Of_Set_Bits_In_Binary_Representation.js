/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * 2025/6/20 勉強寫得出來 掌握度80%
 */
var countPrimeSetBits = function (left, right) {
  console.log(`output->toBinary(6)`, left.toString(2));
  let array = [];
  for (let i = left; i <= right; i++) {
    let sum = i
      .toString(2)
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0);
    array.push(sum);
  }
  let count = 0;
  array.forEach((item) => {
    if (isPrime(item)) {
      count += 1;
    }
  });
  return count;
};

var isPrime = (number) => {
  if (number < 2) return false; // 質數必須大於等於 2
  for (let i = 2; i * i <= number; i++) {
    // 只需檢查到平方根
    if (number % i === 0) return false;
  }
  return true;
};
console.log(`output->countPrimeSetBits`, countPrimeSetBits(6, 10));
