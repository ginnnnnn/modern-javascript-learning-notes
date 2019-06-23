//constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = () => {
        console.log(`${this.username} has login!`)
    }
};




// class User {
//     constructor(username, email) {
//         //set up properties
//         this.username = username,
//             this.email = email
//     }
//     login() {
//         console.log(`${this.username} just login!`)
//     }
//     logout() {
//         console.log(`${this.username} just logout!`)
//     }
// }
const userOne = new User('luffy', 'luffy@op.io');
const userTwo = new User('zoro', 'zoro@op.io');
const userFourth = new User('sanji', 'sanji@op.io');
console.log(userOne, userTwo, userFourth);
userTwo.login();

//the 'new' keyword
//1. it create a new empty object {}
//2. it bind the value of 'this' to the new empty object
//3.it calls the constructor function to 'build' the object

