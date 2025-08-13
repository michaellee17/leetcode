/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 * 2025/8/13 用輔助函數 偏簡單
 */
var busyStudent = function (startTime, endTime, queryTime) {
  const CheckDoing = (start, end) => {
    if (start <= queryTime && queryTime <= end) return true;
    return false;
  };
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (CheckDoing(startTime[i], endTime[i])) count++;
  }
  return count;
};
console.log(`output->busyStudent`, busyStudent([1, 2, 3], [3, 2, 7], 4));
