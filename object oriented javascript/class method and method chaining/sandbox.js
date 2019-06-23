class User {
    constructor(username, email) {
        //set up properties
        this.username = username,
            this.email = email,
            this.score = 0
    }
    login() {
        console.log(`${this.username} just login!`);
        return this
    }
    logout() {
        console.log(`${this.username} just logout!`);
        return this
    }
    inScore() {
        this.score += 1;
        console.log(`${this.username} has scores of ${this.score}`);
        return this
    }
}

const userOne = new User('luffy', 'luffy@op.io');
const userTwo = new User('zoro', 'zoro@op.io');

console.log(userOne);
console.log(userTwo);
userOne.login();//luffy just login!
userOne.logout();//luffy just logout!
userTwo.login();//zoro just login!

//chaining 

// userOne.login().logout(); // wont work 
//Uncaught TypeError: Cannot read property 'logout' of undefined
/* in javascript a function which doesnt return a value it will return undefine
so when we chain it . undefine doesnt has a method logout() */
userTwo.login().inScore()




