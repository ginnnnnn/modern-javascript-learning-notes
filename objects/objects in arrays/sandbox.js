// objects in arrays

/* const skills = [{
    title: 'komu komu no pistol', damage: 30
}, {
    title: 'Gear 4', damage: 60
}, { title: 'Tank man', damage: 80 }]
stores object in Array */

const user = {
    name: 'luffy',
    age: 24,
    race: 'D',
    location: 'east blue',
    skills: [{
        title: 'komu komu no pistol', damage: 30
    }, {
        title: 'Gear 4', damage: 60
    }, { title: 'Tank man', damage: 80 }],
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
            console.log(skill.title, ' damage:', skill.damage)
        })
    }

};

user.fireSkill();