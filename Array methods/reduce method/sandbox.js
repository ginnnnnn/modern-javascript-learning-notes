//reduce() ,return a single value that u want
const scores = [10, 22, 33, 12, 55, 66, 123, 1, 23, 6, 8, 90];

sumScores = scores.reduce((acc, curr) => {
    //curr is the array[i] acc is the current value it start at 0 -the seconed argument
    return acc = acc + curr
    //return acc value 
}, 0)

console.log(sumScores)

const users = [
    { name: 'ryo', age: 43 },
    { name: 'chun-li', age: 37 },
    { name: 'mario', age: 49 },
    { name: 'naruto', age: 33 },
    { name: 'luffy', age: 23 },
    { name: 'luffy', age: 23 },
    { name: 'kaido', age: 93 },
    { name: 'emu', age: 1293 },
];

const whoIsOrder = users.reduce((acc, curr) => {
    if (curr.age >= acc.age) {
        return curr
    } else {
        return acc
    }
}, { age: 0 }).name


console.log(whoIsOrder);

const damages = [
    { name: "luffy", dmg: 120 },
    { name: "nami", dmg: 10 },
    { name: "osopp", dmg: 15 },
    { name: "luffy", dmg: 320 },
    { name: "sanji", dmg: 100 },
    { name: "zoro", dmg: 99 },
    { name: "brock", dmg: 80 },
    { name: "franky", dmg: 77 },
    { name: "luffy", dmg: 80 },
    { name: "robin", dmg: 33 },
    { name: "luffy", dmg: 40 },
    { name: "luffy", dmg: 440 },
    { name: "sanji", dmg: 81 },
    { name: "osopp", dmg: 90 },
    { name: "luffy", dmg: 90 },
    { name: "zoro", dmg: 500 },
]

const luffyDmg = damages.reduce((acc, curr) => {
    if (curr.name === "luffy") {
        return acc += curr.dmg
    } else {
        return acc
    }
}, 0);
const zoroDmg = damages.reduce((acc, curr) => {
    if (curr.name === "zoro") {
        return acc += curr.dmg
    } else {
        return acc
    }
}, 0);
console.log(luffyDmg);//1090
console.log(zoroDmg);//599

