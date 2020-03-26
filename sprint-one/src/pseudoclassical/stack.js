var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keyClass = 0;
};

// push
Stack.prototype.push = function(value) {
  this.storage[this.keyClass] = value;
  this.keyClass = this.keyClass + 1;
};

// pop
Stack.prototype.pop = function() {
  if (this.keyClass > 0) {
    this.keyClass = this.keyClass - 1;
    return this.storage[this.keyClass];
    delete this.storage[this.keyClass];
  }
};

// size
Stack.prototype.size = function() {
  return this.keyClass;
};


