/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Tag: String
 * 2024/11/15 第一次看 掌握度60%
 * 2024/12/16 第二次看 掌握度70% 進位問題 每圈重製
 * 2024/12/31 第三次看 掌握度80%
 * 2025/6/30 第四次做 掌握度100%
 * 10/2 =5 10%2 = 0 除數 跟 餘數
 * 陣列反轉reverse() 字串結合join("")
 * 字串轉數字parseInt() 進位Math.floor()
 * 本題相當複雜要多看
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    //每次新的迴圈 先把carry加進去
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i], 10);
    }
    if (j >= 0) {
      sum += parseInt(b[j], 10);
    }
    console.log(`output->sum`, sum);
    //計算有無進位 每圈都重算
    carry = Math.floor(sum / 2);
    console.log(`output->carry`, carry);
    //取餘數並放進result
    result.push(sum % 2);
  }

  console.log(`output->result`, result);

  //反轉再字串結合
  return result.reverse().join("");
};

var addBinary2 = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

var addBinary3 = function (a, b) {
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = bitA + bitB + carry;
    console.log(`output->sum`, sum);
    result = (sum % 2) + result;
    console.log(`output->result`, result);
    carry = Math.floor(sum / 2);
    console.log(`output->carry`, carry);

    i--;
    j--;
  }

  return result;
};
console.log(`output->addBinary3(11,1)`, addBinary3("1010", "1011"));
