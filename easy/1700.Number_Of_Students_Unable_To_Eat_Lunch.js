/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 * 2025/9/1 要防止無限輪迴 掌握度80%
 */
var countStudents = function (students, sandwiches) {
  let rotations = 0;

  while (students.length > 0 && rotations < students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      rotations = 0; // 重置計數器
    } else {
      let item = students.shift();
      students.push(item);
      rotations++; // 增加輪轉次數
    }
  }
  return students.length;
};
console.log(
  `output->countStudents()`,
  countStudents([1, 1, 0, 0], [0, 1, 0, 1])
);
