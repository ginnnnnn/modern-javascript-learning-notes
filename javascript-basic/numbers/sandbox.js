let radius = 10;
const pi = 3.14;

console.log(radius, pi);


// math operation +,-,*,/,**,%

console.log(10 / 2); //5
let result = radius % 3;
console.log(result) //1

let area = pi * radius ** 2;
console.log(area) // circle area 314

//order of operation ,B I D M A S
// Brackets () ,indices ** ,Division / ,Multiplication *,Addition +, Subtraction
let math_result = (3 + 6) ** 2 / 3 - 3;
console.log(math_result); // 24

let likes = 10;
// likes = likes + 1;
likes++
console.log(likes) //11

//likes = likes -1
likes--
console.log(likes)//10

likes += 10;
//likes = likes + 10
console.log(likes); // 20

likes -= 5;
//likes =likes -5
console.log(likes) // 15

likes *= 2;
//likes=likes * 2
console.log(likes) // 30

likes /= 3;
//likes= likes/2
console.log(likes) //10


// NaN , Not a Number
console.log(100 / "hello") //NaN

//concatenation 

let likes_result = 'this blog has ' + likes + ' likes';
console.log(likes_result);//"this blog has 10 likes"
