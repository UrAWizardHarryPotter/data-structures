var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Object.create
  var someInstance = Object.create(queueMethods);
  var storage = {};
  someInstance.key = 0;
  someInstance.beginning = 0;
  someInstance.storage = storage;
  return someInstance;
};

// define object keys for methods
var queueMethods = {
  // enqueque
  enqueue: function(value) {
    this.storage[this.key] = value;
    //increment key count
    this.key = this.key + 1;
  },

  // dequeque
  dequeue: function() {
    // assign beginning element
    var element = this.storage[this.beginning];
    // remove lowest element from the storafe
    delete this.storage[this.beginning];
    // increment by 1
    this.beginning = this.beginning + 1;
    // return element
    return element;
  },

  // size
  size: function() {
    var size = this.key - this.beginning;
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  }
};


