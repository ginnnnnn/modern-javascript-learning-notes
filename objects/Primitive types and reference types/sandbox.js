//Primitive and Reference Types

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne:${scoreOne}, scoreTwo:${scoreTwo}`);
//scoreOne:50, scoreTwo:50

scoreOne = 100;

console.log(`scoreOne:${scoreOne}, scoreTwo:${scoreTwo}`);
//scoreOne:100, scoreTwo:50

//reference values

const userOne = { name: 'Luffy', age: 18 };
const userTwo = userOne;

console.log(userOne, userTwo);
//{name: "Luffy", age: 18} {name: "Luffy", age: 18}


userOne.name = 'Nami';

console.log(userOne, userTwo);
//{name: "Nami", age: 18} {name: "Nami", age: 18}