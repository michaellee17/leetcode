/**
 * @param {string} date
 * @return {string}
 * 2025/9/19 字串替換
 */
var reformatDate = function (date) {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const parts = date.split(" ");
  const day = parseInt(parts[0]).toString().padStart(2, "0");
  const month = months[parts[1]];
  const year = parts[2];

  return `${year}-${month}-${day}`;
};
console.log(`output->reformatDate()`, reformatDate("20th Oct 2052"));
