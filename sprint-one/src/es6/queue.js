class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.key = 0;
    this.beginning = 0;
    this.storage = {};
  }

  // enqueue
  enqueue(value) {
    this.storage[this.key] = value;
    //increment key count
    this.key = this.key + 1;
  }

  // dequeque
  dequeue() {
    // assign beginning element
    let element = this.storage[this.beginning];
    // remove lowest element from the storafe
    delete this.storage[this.beginning];
    // increment by 1
    this.beginning = this.beginning + 1;
    // return element
    return element;
  }

  // size
  size() {
    var size = this.key - this.beginning;
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  }

}
