/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 * 2025/9/17 date運用 掌握度70%
 */
var daysBetweenDates = function (date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
