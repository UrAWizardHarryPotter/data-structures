var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  someInstance.keyClass = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

// push
stackMethods.push = function(value) {
  this.storage[this.keyClass] = value;
  this.keyClass = this.keyClass + 1;
};
// pop
stackMethods.pop = function() {
  if (this.keyClass > 0) {
    this.keyClass = this.keyClass - 1;
    return this.storage[this.keyClass];
    delete this.storage[this.keyClass];
  }
};

// size
stackMethods.size = function() {
  return this.keyClass;
};
