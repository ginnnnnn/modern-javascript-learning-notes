//common string methods

let email = 'ginnnnnn@gmail.com';

//lastIndexOf()

let result = email.lastIndexOf('n');// this would find the last one characters

console.log(result); // this would get 7, 0 to 7 number 8's characters

//slice()

let slice_result = email.slice(0, 5); //return a slice of the variable from 0 to 5, 5 characters

console.log(slice_result); // this would get "ginnn"

let slice2_result = email.slice(2, 7);
console.log(slice2_result); //this would get "nnnnn"

//substr()

let substr_result = email.substr(0, 5);
/* return a value of the variable from index 0 to 5 characters */
let substr2_result = email.substr(3, 10);

console.log(substr_result); // this get "ginnn"
console.log(substr2_result); //this get "nnnnn@gmai"

//replace()

let replace_result = email.replace("n", "m");
/* it takes 2 arguments,andreturn a new variable which replaced
 the first matched character to the second argument character */
console.log(replace_result);//this get gimnnnnn@gmail.com