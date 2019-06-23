const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
});

//Regular expression

const testUsername = '2221pagianlokfmi';

// const pattern = /[a-z]{6,}/;
//set regex pattern, `include` lower case alphabet for at least 6 character long

const pattern = /^[a-z]{6,}$/;
// for start and end with lower case alphabet and at least for 6 characters long


let result = pattern.test(testUsername);
//this is regex method for testing by passing string

console.log(result)// return a boolean

let result2 = testUsername.search(pattern);
//this is a other way around of testing
console.log(result2);// return interger index where it matched if not match return -1
//pagianlokfmi match /^[a-z]{6,}$/ in the beginning of index 0
//221pagianlokfmi match /[a-z]{6,}$/ in the beginning index 3
//

//most of time , use test() method. it works better