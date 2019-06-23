//type conversion 

let score = '100';

console.log(score + 1);//'1001'

score = Number(score);
console.log(score + 1);//101

//typeof
console.log(typeof score);//number
console.log(typeof 'jakie');//string

let result = 'lufa';
console.log(Number(result))//NaN

//String
result = String(50);
console.log(result, typeof result);//50 string

//Boolean
result = Boolean(100);
console.log(result, typeof result); //true "boolean"
console.log(Boolean(0));//false ,only 0 is false
console.log(Boolean(-1));//true
console.log(Boolean("0"));//true, "0" is string, string is true value
console.log(Boolean(""));//false,"" empty string is false 


