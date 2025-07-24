/**
 * @param {string[]} words
 * @return {number}
 * 2025/6/9 免強解得出來 掌握度80%
 * 2025/7/24 記得小寫a的unicode為97 使用stirng.charCodeAt(i)的方式來對應陣列 set.add 確保加入的是不重複的mosCode 然後回傳set.size
 * 掌握度90% 蠻多需要注意的小細節的
 */
const morsemap = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];
var uniqueMorseRepresentations = function (words) {
  let morseArray = words.map((item) => {
    let morseString = "";
    item.split("").forEach((letter) => {
      morseString += formatMorse(letter);
    });
    return morseString;
  });
  return new Set(morseArray).size;
};

var formatMorse = (letter) => {
  let arrayIndex = letter.charCodeAt() - 97;
  return morsemap[arrayIndex];
};

var uniqueMorseRepresentations = function (words) {
  let arr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let set = new Set();
  words.forEach((item) => {
    let mos = "";
    for (let i = 0; i < item.length; i++) {
      mos += arr[item.charCodeAt(i) - 97];
    }
    set.add(mos);
  });
  return set.size;
};

console.log(
  `output->uniqueMorseRepresentations`,
  uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])
);
