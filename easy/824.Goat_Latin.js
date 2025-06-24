/**
 * @param {string} sentence
 * @return {string}
 */
const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var toGoatLatin = function (sentence) {
  let array = sentence.split(" ");
  let result = "";
  array.forEach((item, index) => {
    let first = item.slice(0, 1);
    let string = "";
    for (let i = 0; i < index + 2; i++) {
      console.log(`output->i`, i);
      string += "a";
    }
    if (vowels.includes(first)) {
      result += `${item}m${string} `;
    } else {
      let newItem = item.slice(1) + item[0];
      result += `${newItem}m${string} `;
    }
  });
  return result.trim();
};

console.log(`output->`, toGoatLatin("I speak Goat Latin"));
