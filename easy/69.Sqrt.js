/**
 * @param {number} x
 * @return {number}
 * Tag: Math
 * 2024/12/06 第一次看 掌握度80% 二分法 binary search early return
 * 2024/12/16 第二次看 掌握度90%
 * 2024/12/17 第三次看 掌握度100% 移動mid去比較
 * 2025/7/1 第四次看 掌握度100%
 * for迴圈的結構:
 * (初始狀態;條件;更新) 初始狀態可以在外面定義所以可省略 更新可以在{}內處理也是可以省略
 * ex: for (; left <= right; )
 * 二分法觀念:假設[1,2,3,4,5] 我要找2在哪 我可以先看2比中間的數字大還是小 這樣去比較會比較快
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;

  let left = 1,
    right = x,
    result = 0;

  for (; left <= right; ) {
    //等於while
    //取中間值的整數
    let mid = Math.floor((left + right) / 2);
    //若中間值的平方等於x的話就回傳中間值
    if (mid * mid === x) {
      return mid;
      //若中間值的平方小於x的話就把中間值放到result裡面
    } else if (mid * mid < x) {
      //left往右移
      left = mid + 1;
      result = mid;
      //若中間值的平方大於x的話就把中間值放到result裡面
    } else {
      //right往左移
      right = mid - 1;
    }
  }
  //若迴圈跑完都沒有early return 的話就回傳result
  return result;
};

var mySqrt2 = function (x) {
  return Math.floor(Math.sqrt(x));
};

console.log(mySqrt(8)); //2
