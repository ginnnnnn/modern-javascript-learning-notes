//chain array
const users = [
    { name: 'ryo', age: 43 },
    { name: 'chun-li', age: 37 },
    { name: 'mario', age: 49 },
    { name: 'naruto', age: 33 },
    { name: 'luffy', age: 23 },
    { name: 'kaido', age: 93 },
    { name: 'emu', age: 1293 },
];

// const filterArr = users.filter(user => user.age > 40);
// const newArr = filterArr.map(newUser => `${newUser.name} is ${newUser.age}'s old`);
const newArr = users
    .filter(u => u.age > 40)
    .map(nu => `${nu.name} is ${nu.age}`);

console.log(newArr);