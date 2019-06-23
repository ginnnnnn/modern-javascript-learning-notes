//object literals

const user = {
    name: 'luffy',
    age: 24,
    race: 'D',
    location: 'east blue',
    skills: ['komu komu no pistol', 'Gear 4', 'Tank man']
};

console.log(user);
console.log(user.name);//get the name property; use doc notation

console.log(user.age);//24
user.age = 35; //the way to change the value of the property of an object
console.log(user.age);//35

console.log(user['race']); // other way to get the property, square brackets notaion ['string']
user['location'] = 'new world';
console.log(user['location']);
// square notion is useful if we need to use key variable to get the value;

let key = 'race';
console.log(user[key]); // works
console.log(user.key); // wont work ,get undefine;

console.log(typeof user);//get object

