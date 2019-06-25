"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("hey ".concat(name, " ! how are you?"));
};

greet('luffy');
greet('nami');
greet('zoro');

var User = function User() {
  _classCallCheck(this, User);

  this.name = 'zoro';
  this.age = 120;
};
