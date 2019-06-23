//  true/false

console.log(true);//true
console.log(false);//false
console.log('true', true, 'false', false);//not the same

let email = 'ginnnnnn@gmail.com';
let names = ['ryo', 'ken', 'saga']

let result = email.includes('@'); // includes() check and return a boolean 
console.log(result);//true
result = names.includes('saga');
console.log(result);//true
result = names.includes('akuma');
console.log(result);//false

//comparison operators

let age = 33;

console.log(age == 44);//false
console.log(age == 33);//true
console.log(age != 30);//true
console.log(age < 30);//false
console.log(age >= 33)//true
console.log(age <= 33)//true
console.log(age >= 34)//false

let name = 'gin';
console.log(name == 'gin');//true
console.log(name == 'Gin');//false
console.log(name > 'gin');//false
console.log(name > 'Gin');//true,small case bigger than capitalcase 
console.log(name >= 'gin');//true
console.log(name < 'hin');//true  ,it compare the first alphabet,G comes earlier than H
console.log(name > 'Hin');//true
console.log(name < 'Ain');//false










