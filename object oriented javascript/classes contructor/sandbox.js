class User {
    constructor(username, email) {
        //set up properties
        this.username = username,
            this.email = email
    }
    login() {
        console.log(`${this.username} just login!`)
    }
    logout() {
        console.log(`${this.username} just logout!`)
    }
}

const userOne = new User('luffy', 'luffy@op.io');
const userTwo = new User('zoro', 'zoro@op.io');

console.log(userOne);
console.log(userTwo);
userOne.login();//luffy just login!
userOne.logout();//luffy just logout!
userTwo.login();//zoro just login!


//the 'new' keyword
//1. it create a new empty object {}
//2. it bind the value of 'this' to the new empty object
//3.it calls the constructor function to 'build' the object


