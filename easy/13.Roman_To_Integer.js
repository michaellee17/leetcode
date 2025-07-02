/**
 * @param {string} s
 * @return {number}
 * Tag: String HashTable
 * 2024/11/14 第一次看 熟練度90%
 * 2024/12/16 第二次看 熟練度100% string 可以直接跑for loop
 * 2024/12/31 第三次看 熟練度100%
 * 2025/6/30 第四看 熟練度100% 用reduce也可以解 只是還要從字串拆解成陣列 效能也會變差
 */

const table = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanNum[s[i]];
    let next = romanNum[s[i + 1]];

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};

var romanToInt = (s) => {
  let romanNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let array = s.split("");
  return array.reduce((acc, cur, index) => {
    let current = romanNum[cur];
    let next = romanNum[array[index + 1]];

    current < next ? (acc -= current) : (acc += current);

    return acc;
  }, 0);
};

console.log(romanToInt("III"));
