//2024/12/24 第一次看 掌握度 60% 用queue就是 用shift
var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let result = this.queue1.shift();
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return result;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  let result = this.queue1.shift();
  this.queue2.push(result);
  [this.queue1, this.queue2] = [this.queue2, this.queue1];
  return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue1.length === 0;
};

// 測試用例
let stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); // 輸出: 2
console.log(stack.pop()); // 輸出: 2
console.log(stack.empty()); // 輸出: false
