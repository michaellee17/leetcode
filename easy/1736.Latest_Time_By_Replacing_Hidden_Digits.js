/**
 * @param {string} time
 * @return {string}
 * 2025/9/23 不難但狠煩 掌握度80%
 * 字串不能直接改!
 */
var maximumTime = function (time) {
  let result = time.split("");

  // 處理小時第一位
  if (result[0] === "?") {
    if (result[1] === "?" || result[1] <= "3") {
      result[0] = "2";
    } else {
      result[0] = "1";
    }
  }

  // 處理小時第二位
  if (result[1] === "?") {
    if (result[0] === "2") {
      result[1] = "3";
    } else {
      result[1] = "9";
    }
  }

  // 處理分鐘第一位
  if (result[3] === "?") {
    result[3] = "5";
  }

  // 處理分鐘第二位
  if (result[4] === "?") {
    result[4] = "9";
  }

  return result.join("");
};
console.log(`output->`, maximumTime("2?:?0"));
