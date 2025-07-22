/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 2025/07/22 第二次看 矩陣換位法
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // 交換 s[left] 和 s[right]
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    console.log(`output->left`, left);
    right--;
    console.log(`output->right`, right);
  }
  return s;
};

// 錯誤示範 會有問題因為s.shift()會改變原本的陣列 在index不變的情況下會錯
var reverseString1 = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let item = s.shift();
    console.log(`output->item`, item);
    result.push(item);
  }
  return result;
};

var reverseString2 = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let left = s[i];
    let right = s[s.length - 1 - i];
    [s[i], s[s.length - 1 - i]] = [right, left];
  }
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
