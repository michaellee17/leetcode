/**
 * @param {string} s
 * @return {number}
 * 2024/12/27 第一次看 掌握度80% filter運用
 * 2025/7/8 第二次看 有同2114的觀念再複習一下 掌握度90%
 * 1."" 為falsy " "為真值
 * 2.s.split(" ").filter((w) => w !== "") === s.split(" ").filter((w) => w); 利用filter的特性 這樣會只回傳真值
 * 3.split('') 為字元切格 split(' ')為一個單字切割
 */
var countSegments = function (s) {
  console.log(`output->s.split(" ")`, s.split(" ").length);
  let words = s.split(" ").filter((w) => w !== "");

  return words.length;
};
console.log(
  `output->countSegments("Hello, my name is John")`,
  countSegments("Hello, my name is John  ")
);
