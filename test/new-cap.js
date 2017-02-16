function Cat(name) {
  this.name = name;
}

// error
// Cat('Tom');

// correct
new Cat('Tom');

var mouse = function(name) {
  console.info(name);
};

// error
// new mouse('Jerry');

// correct
mouse('Jerry');
