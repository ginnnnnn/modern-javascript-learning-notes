const userOne = {
    username: 'luffy',
    tech: 'komu komu no pistol gun',
    login() {
        console.log('user login!')
    },
    logout() {
        console.log('user logout!')
    }
};

console.log(userOne.username, userOne.tech);
userOne.login();

const userTwo = {
    username: 'Zoro',
    tech: '3000 phinex pound',
    login() {
        console.log('user login!')
    },
    logout() {
        console.log('user logout!')
    }
};

console.log(userTwo.username, userTwo.tech);
userTwo.login();

//  this won't work but this is the basic class purpose
//const userThree = new User('Nami', 'lighting!');