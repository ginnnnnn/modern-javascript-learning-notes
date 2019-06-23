//filter() ,return a new array and not alter the original array
const scores = [10, 22, 33, 12, 55, 66, 123, 1, 23, 6, 8, 90];
const newScores_above_30 = scores.filter(score => {
    return score > 30;
    //need to return a boolean,if true the value will store in a new array
});
console.log(newScores_above_30);

const users = [
    { name: 'ryo', streetfight: true },
    { name: 'chun-li', streetfight: true },
    { name: 'mario', streetfight: false },
    { name: 'naruto', streetfight: false },
];

const streetfight_characters = users.filter(user => {
    return user.streetfight
}).map(sfUser => {
    return sfUser.name;
})
console.log(streetfight_characters)