/**
 * @param {string} sentence
 * @return {string}
 * 2025/7/16 第二次看 掌握度70%
 * 2025/7/24 第三次看 掌握度90% 其實比較適合用map來寫 然後記得js.string.repeat(x)用法
 * 'abc'.repeat(2) = 'abcabc' 不然就是要字串模板
 */
const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var toGoatLatin = function (sentence) {
  let array = sentence.split(" ");
  let result = "";
  array.forEach((item, index) => {
    let first = item[0];
    console.log(`output->first`, first);
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
