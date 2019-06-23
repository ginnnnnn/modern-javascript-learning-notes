//map() ,return a new array and not alter the original array
const scores = [10, 22, 33, 12, 55, 66, 123, 1, 23, 6, 8, 90];

const halfScores = scores.map(score => {
    return Number((score / 2).toFixed(2))

    //toFixed(number) return a string number with number's decimal, 
    //Number(string) make it a number
})
console.log(halfScores)

const users = [
    { name: 'ryo', age: 43 },
    { name: 'chun-li', age: 37 },
    { name: 'mario', age: 49 },
    { name: 'naruto', age: 33 },
    { name: 'luffy', age: 23 },
];

const newUsers_agehalf_if_above35 = users.map(user => {
    if (user.age > 35) {
        return Object.assign({}, user, { age: user.age / 2 })
    } else {
        return user
    }
})

console.log(newUsers_agehalf_if_above35);

