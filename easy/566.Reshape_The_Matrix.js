/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * Tag: Array
 * 2024/12/11 第一次看 掌握度 80% 這題有點難度，需要再看一下 reduce 動態思考邏輯
 * 2024/12/20 第二次看 掌握度 90% flat reduce 用餘數來判斷是否要換行
 */
var matrixReshape = function (mat, r, c) {
  //先攤平陣列
  let a = mat.flat();
  let length = a.length;
  //組不出來就回傳原本的陣列
  if (r * c !== length) {
    return mat;
  }
  //如果只有一行就直接加誇號回傳
  if (r === 1) {
    return [a];
  } else {
    a = a.reduce((acc, cur, i) => {
      //整除就加入新的陣列 因為假設四個元素 index = 2 也就是第三個元素 就要加入新的行
      if (i % c === 0) {
        acc.push([cur]);
      } else {
        //最後一個陣列加入元素
        console.log(`output->accbefore`, acc);
        acc[acc.length - 1].push(cur);
        console.log(`output->accafter`, acc);
      }
      return acc;
    }, []);
  }

  return a;
};
console.log(
  `output->matricReshape([[1,2],[3,4]],1,4)`,
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    2
  )
);
