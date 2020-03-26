var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var beginning = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    // assign beginning element
    var element = storage[beginning];
    delete storage[beginning];
    beginning++;
    return element;
  };

  someInstance.size = function() {
    var size = key - beginning;
    if (size >= 0) {
      return size;
    } else {
      return 0;
    }
  };

  return someInstance;
};
