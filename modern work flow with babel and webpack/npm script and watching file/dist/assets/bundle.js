"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("hey ".concat(name, " ! how do you do?"));
};

greet('nami');
greet('link');
greet('zoro');

var User = function User() {
  _classCallCheck(this, User);

  this.name = 'link';
  this.age = 30;
};
