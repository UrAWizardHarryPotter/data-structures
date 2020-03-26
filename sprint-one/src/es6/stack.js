class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.keyClass = 0;
  }

  // push
  push(value) {
    this.storage[this.keyClass] = value;
    this.keyClass = this.keyClass + 1;
  }

  // pop
  pop() {
    if (this.keyClass > 0) {
      this.keyClass = this.keyClass - 1;
      return this.storage[this.keyClass];
      delete this.storage[this.keyClass];
    }
  }

  // size
  size() {
    return this.keyClass;
  }

}