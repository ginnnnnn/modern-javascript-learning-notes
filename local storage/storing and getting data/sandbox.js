//store data in local storage
// localStorage.setItem("name", "Luffy");
// //setItem() takes two arguments key and value,both string
// localStorage.setItem("tech", "Gear-2");
// localStorage.setItem("age", 21);
// // numbet here will still turn into string


//get data from local storage
let name = localStorage.getItem('name');
console.log(name);//Luffy
let age = localStorage.getItem('age');
console.log(age);//21 <-string

//updating data

localStorage.setItem("name", "Zoro");
//setItem() also can use for update value, if the key does not exist it will add a new one
localStorage.age = '32';
//also can use dot notaion to updata value

console.log(name);//Luffy ,primitive type
name = localStorage.getItem('name');
console.log(name);//Zoro
console.log(age);// 21
age = localStorage.getItem('age');
console.log(age);//32
