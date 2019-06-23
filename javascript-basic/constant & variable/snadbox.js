let age = 25;
let year = 2019;
// let , we want the value of the variable can be changed
console.log(age, year)

age = 30
console.log(age)

const points = 103;

// if we put 
//points = 31;

/*
error :snadbox.js:11 Uncaught TypeError: Assignment to constant variable.
   at snadbox.js:11 */

//const , we dont want the value of variable can be changed
console.log(points)

var score = 75;

// older way of defining a variable

console.log(score);

/*naming variable use camel case
the name can only contain letters,number,underscore or  dollar signs
and can't start with number */