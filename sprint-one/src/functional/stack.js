var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key = key + 1;
  };

  someInstance.pop = function() {
    if (key > 0) {
      key = key - 1;
      return storage[key];
      delete storage[key];
    }
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};