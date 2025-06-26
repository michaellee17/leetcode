/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 * 2025/6/26 雙指針 小複雜 掌握度70 %
 */
var isLongPressedName = function (name, typed) {
  let i = 0; // 指向 name 的指標
  let j = 0; // 指向 typed 的指標

  while (j < typed.length) {
    if (i < name.length && name[i] === typed[j]) {
      // 如果字元匹配，移動 name 和 typed 的指標
      i++;
      j++;
    } else if (j > 0 && typed[j] === typed[j - 1]) {
      // 如果字元是長按的，移動 typed 的指標
      j++;
    } else {
      // 如果字元不匹配且不是長按的，返回 false
      return false;
    }
  }

  // 如果 name 還有未匹配的字元，返回 false
  return i === name.length;
};
console.log(`output->`, isLongPressedName("alex", "aaleex"));
