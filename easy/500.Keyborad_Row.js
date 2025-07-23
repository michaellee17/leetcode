/**
 * @param {string[]} words
 * @return {string[]}
 * Tag: Array, String
 * 2024/12/11 第一次看 掌握度90% Set觀念
 * 2024/12/19 第二次看 掌握度100%
 * 2025/07/23 第三次看 掌握度100% 1.set處理(搭配set.has) 2.Array.from()字串轉陣列用includes找 3.字串用indexOf === -1 找
 *
 */
var findWords = function (words) {
  const row1 = new Set("qwertyuiopQWERTYUIOP");
  const row2 = new Set("asdfghjklASDFGHJKL");
  const row3 = new Set("zxcvbnmZXCVBNM");

  const result = [];

  //三行之中滿足一行就可以
  for (const word of words) {
    if (
      canBeTypedWithOneRow(word, row1) ||
      canBeTypedWithOneRow(word, row2) ||
      canBeTypedWithOneRow(word, row3)
    ) {
      result.push(word);
    }
  }

  return result;
};

//這個單子都屬於通一行才會返回true 不然都是false
function canBeTypedWithOneRow(word, row) {
  for (const char of word) {
    if (!row.has(char)) {
      return false;
    }
  }
  return true;
}

var findWords2 = function (words) {
  const row1 = new Set("qwertyuiopQWERTYUIOP");
  const row2 = new Set("asdfghjklASDFGHJKL");
  const row3 = new Set("zxcvbnmZXCVBNM");

  let result = [];

  const containOnly = (map, letters) => {
    for (let letter of letters) {
      if (!map.has(letter)) return false;
    }
    return true;
  };

  for (let word of words) {
    if (
      containOnly(row1, word) ||
      containOnly(row2, word) ||
      containOnly(row3, word)
    ) {
      result.push(word);
    }
  }
  return result;
};
var findWords3 = function (words) {
  const row1 = "qwertyuiopQWERTYUIOP";
  const row2 = "asdfghjklASDFGHJKL";
  const row3 = "zxcvbnmZXCVBNM";

  let result = [];

  const inOneRow = (row, item) => {
    for (let word of item) {
      if (row.indexOf(word) === -1) {
        //找不到的情況
        return false;
      }
    }
    return true;
  };

  words.forEach((item) => {
    if (inOneRow(row1, item) || inOneRow(row2, item) || inOneRow(row3, item)) {
      result.push(item);
    }
  });

  return result;
};

const findWords4 = function (words) {
  const row1 = Array.from("qwertyuiopQWERTYUIOP");
  const row2 = Array.from("asdfghjklASDFGHJKL");
  const row3 = Array.from("zxcvbnmZXCVBNM");

  const inOneRow = (row, item) => {
    for (let word of item) {
      if (!row.includes(word)) {
        return false;
      }
    }
    return true;
  };

  let result = [];

  words.forEach((item) => {
    if (inOneRow(row1, item) || inOneRow(row2, item) || inOneRow(row3, item)) {
      result.push(item);
    }
  });
  return result;
};
console.log(`output->`, findWords4(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska", "Dad"]
