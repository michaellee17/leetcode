/**
 * @param {string} text
 * @return {string}
 * 2025/9/23 中等難度掌握度70%
 * 1.用split(" ")切割會得到 "" 再用filter返回truthy
 * 補充再js之中falsy只有
 * -false,undefined,NaN,'',0,-0,null,0n
 * 2.注意一個單詞的情況 用early return直接先處理
 * 3.用/的時候若要取整數要加上Math.floor
 */
var reorderSpaces = function (text) {
  let words = text.split(" ").filter((item) => item);
  let spaceCount = text.length - words.join("").length;
  // 只有一個單詞的情況
  if (words.length === 1) {
    return words[0] + " ".repeat(spaceCount);
  }

  let gap = words.length - 1;
  let periods = Math.floor(spaceCount / gap);
  let remain = spaceCount % gap;

  let result = "";
  for (let i = 0; i < words.length - 1; i++) {
    result += words[i] + " ".repeat(periods);
  }
  result += words[words.length - 1];
  result += " ".repeat(remain);

  return result;
};
console.log(`output->`, reorderSpaces("  this   is  a sentence "));
