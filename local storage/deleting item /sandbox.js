// store data in local storage
localStorage.setItem("name", "Luffy");
localStorage.setItem("tech", "Gear-2");
localStorage.setItem("age", 21);


//get data from local storage
let name = localStorage.getItem('name');
console.log(name);//Luffy
let age = localStorage.getItem('age');
console.log(age);//21 <-string

//deleting Item from local storage;
// localStorage.removeItem('tech');
//remove single item from local storage

localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
let tech = localStorage.getItem('tech');
console.log(name);//null
console.log(age);//null
console.log(tech); //null

