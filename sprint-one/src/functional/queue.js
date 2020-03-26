var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var key = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key = key + 1;
  };

  someInstance.dequeue = function() {
    if (key > 0) {
      delete storage[key];
      key = key - 1;
    } else {
      delete storage[key];
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
