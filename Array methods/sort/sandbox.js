//sort() doesnt return a new array it alter the original array and return a original array

//sort strings
const names = ['ryo', 'chun-li', 'ken', 'sanji', 'omu', 'akuma', 'luffy']

console.log(names);//['ryo', 'chun-li', 'ken', 'sanji', 'omu', 'akuma', 'luffy']
names.sort();//it defaultly will sort the array alphabetically

console.log(names.sort());//this is still the original array
//["akuma", "chun-li", "ken", "luffy", "omu", "ryo", "sanji"]

console.log(names);//["akuma", "chun-li", "ken", "luffy", "omu", "ryo", "sanji"]

names.reverse();//this will reverse the array by index
console.log(names);//["sanji", "ryo", "omu", "luffy", "ken", "chun-li", "akuma"]

//sort numbers
const scores = [10, 22, 33, 12, 55, 66, 123, 1, 23, 6, 8, 90];
scores.sort();//it sort it by first index of the individual value, 10 100 2 22 like that
console.log(scores);//[1, 10, 12, 123, 22, 23, 33, 55, 6, 66, 8, 90]

scores.sort((a, b) => a - b); //small one go first
console.log(scores);

//sort object
const users = [
    { name: 'ryo', age: 43 },
    { name: 'chun-li', age: 37 },
    { name: 'mario', age: 49 },
    { name: 'naruto', age: 33 },
    { name: 'luffy', age: 23 },
];

// users.sort();//wont change anything sort() bt default only do shallow compare
// console.log(users);//same

users.sort((a, b) => {
    //a ,b are Hypothetical value in the array, every run it will compare 
    //one item to other one and expect to return a negative interger or positive interger
    //or zero like -1 ,1 or 0 
    if (a.age > b.age) {
        return -1
        // means a will come first
    } else if (a.age < b.age) {
        return 1
        //means b will come first
    } else {
        //if it's equal ,then 0 makes no change
        return 0
    }
})
//or just return b.age -a.age 

console.log(users);
