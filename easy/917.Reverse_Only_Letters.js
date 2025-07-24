/**
 * @param {string} s
 * @return {string}
 * 2025/6/26 要使用正規表達式取或charCodeAt取英文字母 在用map  這握度70%
 * 2025/7/24 用兩個陣列比較 array.popㄞ
 */
var reverseOnlyLetters = function (s) {
  let letters = s.split("").filter((char) => /[a-zA-Z]/.test(char)); // 提取英文字母
  console.log(`output->letters`, letters);
  let result = s.split("").map((char) => {
    if (/[a-zA-Z]/.test(char)) {
      return letters.pop();
    } else {
      return char; // 非英文字母保持原位置
    }
  });
  return result.join(""); // 將結果陣列轉回字串
};

var reverseOnlyLetters = function (s) {
  const isLetter = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // 判斷是否為英文字母
  };

  let letters = s.split("").filter((char) => isLetter(char)); // 提取英文字母
  let result = s.split("").map((char) => {
    if (isLetter(char)) {
      return letters.pop(); // 從陣列後方取出字母
    } else {
      return char; // 非英文字母保持原位置
    }
  });
  return result.join(""); // 將結果陣列轉回字串
};
console.log(`output->`, reverseOnlyLetters("ab-cd"));
