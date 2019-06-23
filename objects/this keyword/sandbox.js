// the keyword 'this'
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
    },
    fireSkill: function () {
        // console.log(this.skills)
        console.log(`${this.name}: Ace!!!!`)
        this.skills.forEach(function (skill) {
            console.log(skill)
        })
    },
    checkThis: () => {
        console.log(this);
    },
    checkThisUser() {
        //this is still regular function
        console.log(this)
    }

};

//this in the object refer to user object itself
// but needs to use function(){} not arrow

user.fireSkill();

user.checkThis(); // this using arrow function and it will refer to window object

user.checkThisUser();//the other way of define regular function in an object



console.log(this); //refer to window object