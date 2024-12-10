/**
 * @param {number} x
 * @return {number}
 * Tag: Math
 * 2024/12/06 第一次看 掌握度80% 二分法 binary search early return
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let left = 1,
    right = x,
    result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
      //如果mid*mid小於x 代表mid還可以再大
    } else if (mid * mid < x) {
      left = mid + 1;
      result = mid;
      //如果mid*mid大於x 代表mid還可以再小
    } else {
      right = mid - 1;
    }
  }
};

console.log(mySqrt(20)); //2
