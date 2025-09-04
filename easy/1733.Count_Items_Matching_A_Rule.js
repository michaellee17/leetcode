/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 * 2025/9/4 不難純考英文 掌握度80%
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = { type: 0, color: 1, name: 2 };
  let count = 0;

  for (let item of items) {
    if (item[keyIndex[ruleKey]] === ruleValue) {
      count++;
    }
  }

  return count;
};
console.log(
  `output->countMatches()`,
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
