/**
 * @param {string[]} words
 * @return {number}
 * 2025/6/9 免強解得出來 掌握度80%
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

console.log(
  `output->uniqueMorseRepresentations`,
  uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])
);
