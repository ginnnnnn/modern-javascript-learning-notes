// add a method to an object

const user = {
    name: 'luffy',
    age: 24,
    race: 'D',
    location: 'east blue',
    skills: ['komu komu no pistol', 'Gear 4', 'Tank man'],
    login: function () {
        console.log('user logged in');
    },
    logout: function (name) {
        console.log(`${name} logged out`);
    }

};

user.login(); //our build method
user.logout(user.name);

//same like String 'object' method
const name = 'hawk-eye';
const capitalName = name.toUpperCase();
console.log(capitalName);

