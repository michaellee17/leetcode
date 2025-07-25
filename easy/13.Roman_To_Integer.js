/**
 * @param {string} s
 * @return {number}
 * Tag: String HashTable
 * 2024/11/14 第一次看 熟練度90%
 * 2024/12/16 第二次看 熟練度100% string 可以直接跑for loop
 * 2024/12/31 第三次看 熟練度100%
 * 2025/6/30 第四看 熟練度100% 用reduce也可以解 只是還要從字串拆解成陣列 效能也會變差
 * 2025/7/18 第五次看 熟練度100% 直接用string跑for loop最快
 * 20257/25 第六次看 熟練度100% 注意邊界條件 就是當跑到最後一位時next 會等於undefined
 * 解法1:next > cur時才-其他都+ 迴避了這個問題 (效能好)
 * 解法2.cur>=next 或 next為undefined時+ next > cur才- (效能差)
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

var romanToInt2 = function (s) {
  let table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = table[s[i]];
    let next = table[s[i + 1]];
    if (next > cur) {
      result -= cur;
    } else {
      result += cur;
    }
  }
  return result;
};

var romanToInt3 = function (s) {
  let table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = table[s[i]];
    let next = table[s[i + 1]];
    if (cur >= next || next === undefined) {
      result += cur;
    } else if (next > cur) {
      result -= cur;
    }
  }
  return result;
};

console.log(romanToInt3("III"));
