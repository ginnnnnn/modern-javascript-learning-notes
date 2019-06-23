//Strings

console.log('hello world');
//use single quotes to wrap it
console.log("hello world");
//or use double quotes to wrap it

let email = 'ginnnnnn@gmail.com';
console.log(email);

//String concatenation

let firstName = 'Austin';
let lastName = 'Chen';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting characters

console.log(fullName[0]);
//use square brackets notation on a string to extract the single character ,here get 'A'
console.log(lastName[2]); //this would gets 'e'

//Strings length
console.log(firstName.length); // this would gets 6 ,Austin is 6 characters
//length is a property of a String data type
console.log(fullName.length); //this would gets 11, including whitespace

//Strings methods
console.log(lastName.toUpperCase()); //this would get ,"CHEN" 
//use parentheses () to excute a method or function

let result = fullName.toLowerCase();
console.log(result, fullName); // this would get ,"austin chen" "Austin Chen"
//these methods don't alter the variable's value itself ,it return a new value

let index = email.indexOf('@'); // put @ as a argument or call a parameter
// for a method use is argument for a function use is parameter
console.log(index); // this would get 8