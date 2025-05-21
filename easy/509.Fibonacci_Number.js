/**
 * @param {number} n
 * @return {number}
 * 2025/5/21 第一次看 掌握度70% 這題是斐波那契數列的問題，斐波那契數列的定義是：F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    console.log(`output->temp`, temp);
    a = b;
    console.log(`output->a`, a);
    b = temp;
    console.log(`output->b`, b);
  }
  return b;
};
console.log(`output->fib(5)`, fib(5));
