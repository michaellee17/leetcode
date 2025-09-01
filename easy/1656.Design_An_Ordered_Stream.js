/**
 * @param {number} n
 * 2025/9/1 看不太懂 掌握度40%
 * 
 * 概念：維護一個有序流，插入時返回從當前指針開始的連續元素
 * 
 * 例子：n=5
 * 初始：stream=[undefined, undefined, undefined, undefined, undefined, undefined], ptr=1
 * 
 * insert(3, "c") -> stream=[undefined, undefined, undefined, "c", undefined, undefined]
 *                   ptr還是1，因為stream[1]還是空的，所以返回[]
 * 
 * insert(1, "a") -> stream=[undefined, "a", undefined, "c", undefined, undefined]
 *                   ptr=1，stream[1]="a"存在，加入result，ptr變2
 *                   stream[2]是空的，停止，返回["a"]
 * 
 * insert(2, "b") -> stream=[undefined, "a", "b", "c", undefined, undefined]
 *                   ptr=2，stream[2]="b"存在，加入result，ptr變3
 *                   stream[3]="c"存在，加入result，ptr變4
 *                   stream[4]是空的，停止，返回["b", "c"]
 */
var OrderedStream = function (n) {
  this.stream = new Array(n + 1);
  this.ptr = 1;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey] = value;
  let result = [];

  while (this.ptr < this.stream.length && this.stream[this.ptr]) {
    result.push(this.stream[this.ptr]);
    this.ptr++;
  }

  return result;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
