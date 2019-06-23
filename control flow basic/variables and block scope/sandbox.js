//variables and block scopes

let age = 30;
if (true) {
    const user = 'john';
    var varUser = 'luk'
    console.log('inside', age);
}
console.log('ouside code block', age);
console.log(varUser);
console.log(user);

/*
sandbox.js:11 Uncaught ReferenceError: user is not defined
    at sandbox.js:11
*/