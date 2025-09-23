/**
 * @param {string} command
 * @return {string}
 * 2025/9/23 條件判斷 不難掌握度90%
 * switch我很少用格式會忘記
 * switch (xxx) {
 *  case 'a':
 *    break
 *  case 'b':
 *    break
 *  deafut:
 *    break
 * }
 */
var interpret = function (command) {
  let result = "";
  let i = 0;
  while (i < command.length) {
    switch (command[i]) {
      case "G":
        result += "G";
        i++;
        break;
      case "(":
        if (command[i + 1] === ")") {
          result += "o";
          i += 2;
        } else {
          result += "al";
          i += 4;
        }
      default:
        break;
    }
  }
  return result;
};
console.log(`output->`, interpret("G()(al)"));
