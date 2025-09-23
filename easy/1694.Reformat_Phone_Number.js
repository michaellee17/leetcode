/**
 * @param {string} number
 * @return {string}
 * 2025/9/23 偏難掌握度70% slice操作
 * String.prototype.slice()
 * slice(indexStart)
   slice(indexStart, indexEnd)
   const str1 = "The morning is upon us."; // The length of str1 is 23.
   const str2 = str1.slice(1, 8);
   const str3 = str1.slice(4, -2);
   const str4 = str1.slice(12);
   const str5 = str1.slice(30);
   console.log(str2); // he morn
   console.log(str3); // morning is upon u
   console.log(str4); // is upon us.
   console.log(str5); // ""
 */
var reformatNumber = function (number) {
  // 只保留數字
  let digits = number.replace(/[^0-9]/g, "");
  let result = "";
  let i = 0;

  // 每3位分組，但最後不能剩1位
  while (i < digits.length) {
    let remaining = digits.length - i;
    if (remaining <= 3) {
      // 剩3位或以下直接加入
      result += digits.slice(i);
      break;
    } else if (remaining === 4) {
      // 剩4位要分成2-2
      result += digits.slice(i, i + 2) + "-" + digits.slice(i + 2, i + 4);
      break;
    } else {
      // 剩5位或以上，取3位加破折號
      result += digits.slice(i, i + 3) + "-";
      i += 3;
    }
  }

  return result;
};
console.log(`output->`, reformatNumber("1-23-4"));
