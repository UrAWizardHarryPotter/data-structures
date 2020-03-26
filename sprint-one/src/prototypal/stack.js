var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Object.create
  var someInstance = Object.create(stackMethods);
  var storage = {};
  someInstance.storage = storage;
  someInstance.keyClass = 0;
  return someInstance;
};

// define object keys for methods
var stackMethods = {
  // push
  push: function(value) {
    this.storage[this.keyClass] = value;
    this.keyClass = this.keyClass + 1;
  },
  // pop
  pop: function() {
    if (this.keyClass > 0) {
      this.keyClass = this.keyClass - 1;
      return this.storage[this.keyClass];
      delete this.storage[this.keyClass];
    }
  },

  // size
  size: function() {
    return this.keyClass;
  }
};


