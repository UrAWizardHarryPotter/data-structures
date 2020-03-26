var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.beginning = 0;
  this.storage = {};
};

// push
Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  //increment key count
  this.key = this.key + 1;
};

// pop
Queue.prototype.dequeue = function() {
  // assign beginning element
  var element = this.storage[this.beginning];
  // remove lowest element from the storage
  delete this.storage[this.beginning];
  // increment by 1
  this.beginning = this.beginning + 1;
  // return element
  return element;
};

// size
Queue.prototype.size = function() {
  var size = this.key - this.beginning;
  if (size >= 0) {
    return size;
  } else {
    return 0;
  }
};

