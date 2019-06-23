//Math object

console.log(Math);
//js built in object

// Math constants

console.log(Math.PI);
//3.141592653589793

console.log(Math.E);
//mathematical constant,2.718281828459045


//Math methods

const area = 8.7;
const area2 = 8.4;

//Math.round() would get the nearest interger
console.log(Math.round(area)); // 9
console.log(Math.round(area2)); // 8

//Math.floor() would get the interger below the number, 8.1 gets 8 ,8.9 gets 8
console.log(Math.floor(area));//8
console.log(Math.floor(area2));//8

//Math.ceil() would get the interger above the number,8.8 gets 9,8.1 gets 9
console.log(Math.ceil(area));//9
console.log(Math.ceil(area2));//9

//Math.trunc() would remove the decimal and leave the interger, 8.9 gets 8, 100.2 gets 100
console.log(Math.trunc(area));//8
console.log(Math.trunc(area2));//8

//Random numbers

const randomNumber = Math.random();

console.log(randomNumber);// return a number between 0 to 1, like 0.001231 to 0.99999
//only 0.00xxx ,so times 100 helps to get not 0 
console.log(Math.round(randomNumber)) //return 0 or 1;
console.log(Math.round(randomNumber * 100)) //return 1 or 100;







