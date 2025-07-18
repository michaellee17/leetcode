/**
 * @param {string[]} emails
 * @return {number}
 * 2025/6/25 用正則效能會比較好 掌握度90%
 * 2025/7/17 注意去除符號的方法 掌握度90%
 */
var numUniqueEmails = function (emails) {
  const formatEmail = (email) => {
    let host = email.split("@")[0];
    if (host.indexOf(".")) {
      //去除.的方法就是split(".")再join
      let sentences = host.split(".");
      host = sentences.join("");
    }
    let plusIndex = host.indexOf("+");
    if (plusIndex >= 0) {
      //slice結束位置不包含 所以剛好是+號前面的字
      host = host.slice(0, plusIndex);
    }
    let domain = email.split("@")[1];
    return host + "@" + domain;
  };
  let formatEmails = emails.map((item) => formatEmail(item));

  return new Set(formatEmails).size;
};
console.log(
  `output->`,
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
