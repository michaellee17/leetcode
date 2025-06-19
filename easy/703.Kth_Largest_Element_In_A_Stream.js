/**
 * @param {number} k
 * @param {number[]} nums
 * 2025/6/11第一次看 超難
 */
// 最小堆實作
class MinHeap {
  constructor() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  peek() {
    return this.data[0];
  }
  push(val) {
    this.data.push(val);
    this._siftUp(this.size() - 1);
  }
  pop() {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.size() > 0) {
      this.data[0] = last;
      this._siftDown(0);
    }
    return top;
  }
  _siftUp(idx) {
    const data = this.data;
    while (idx > 0) {
      const parent = (idx - 1) >> 1;
      if (data[parent] <= data[idx]) break;
      [data[parent], data[idx]] = [data[idx], data[parent]];
      idx = parent;
    }
  }
  _siftDown(idx) {
    const data = this.data;
    const n = this.size();
    while (true) {
      let smallest = idx;
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      if (left < n && data[left] < data[smallest]) smallest = left;
      if (right < n && data[right] < data[smallest]) smallest = right;
      if (smallest === idx) break;
      [data[smallest], data[idx]] = [data[idx], data[smallest]];
      idx = smallest;
    }
  }
}

var KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  for (const num of nums) {
    this.heap.push(num);
    if (this.heap.size() > k) this.heap.pop();
  }
};

KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  if (this.heap.size() > this.k) this.heap.pop();
  return this.heap.peek();
};
