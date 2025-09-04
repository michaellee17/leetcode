/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 * 2025/9/3 xOR 用 ^ 掌握度80%
 */
var decode = function (encoded, first) {
  const result = [first];

  for (let i = 0; i < encoded.length; i++) {
    result.push(result[i] ^ encoded[i]);
  }

  return result;
};
console.log(`output->`, decode([1, 2, 3], 1));
