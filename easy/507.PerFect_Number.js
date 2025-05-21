/**
 * @param {number} num
 * @return {boolean}
 * 2025/5/21 第一次看 掌握度80%
 */
// var checkPerfectNumber = function (num) {
//   let divisorArray = [];
//   let half = Math.floor(num / 2);
//   for (let i = 1; i <= half; i++) {
//     if (num % i === 0) {
//       divisorArray.push(i);
//     }
//   }
//   let sum = divisorArray.reduce((acc, cur) => acc + cur, 0);
//   return sum === num;
// };

var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  let sum = 1;
  console.log(`output->Math.sqrt(num)`, Math.sqrt(num));
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
};

console.log(`output->checkPerfectNumber(28)`, checkPerfectNumber(28));
