/**
 * @param {string} word
 * @return {number}
 * 2025/9/25 不難但有超大數的測試案例會讓 parseInt失效 掌握度80%
 */
var numDifferentIntegers = function (word) {
  let set = new Set();
  let temp = "";
  for (let i = 0; i < word.length; i++) {
    let item = word[i];
    if (item >= "0" && item <= "9") {
      temp += item;
    } else if (temp !== "") {
      set.add(temp.replace(/^0+/, "") || "0");
      temp = "";
    }
  }
  if (temp !== "") set.add(temp.replace(/^0+/, "") || "0");
  return set.size;
};
console.log(`output->`, numDifferentIntegers("a1b01c001"));
