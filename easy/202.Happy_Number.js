/**
 * @param {number} n
 * @return {boolean}
 * 2024/12/23 第一次看 掌握度 70% 快慢指針 題目給的是數字 要先轉字串才能跑迴圈
 * 2025/7/25 第二次看 掌握度70% 要研究一下
 */
var isHappy = function (n) {
  const getNext = (number) => {
    let totalSum = 0;
    let numStr = number.toString();
    for (let i = 0; i < numStr.length; i++) {
      let digit = parseInt(numStr[i]);
      totalSum += digit * digit;
    }
    console.log(`output->totalSum`, totalSum);
    return totalSum;
  };

  // 慢指针，一次走一步
  let slow = n;
  // 快指针，一次走二步
  let fast = getNext(n);

  // 如果 fast不等于1，则最终一定会走入循环，则fast的值最后会=slow，证明不快乐
  while (fast !== 1 && slow !== fast) {
    //慢指针走一步，计算slow的平方和
    slow = getNext(slow);
    //快指针走二步，调用再次计算平方和。
    fast = getNext(getNext(fast));
  }
  console.log(`output->fast`, fast);
  return fast === 1;
};

console.log(`output->isHappy(19)`, isHappy(19)); // 輸出: true
// console.log(`output->isHappy(2)`, isHappy(2)); // 輸出: false
