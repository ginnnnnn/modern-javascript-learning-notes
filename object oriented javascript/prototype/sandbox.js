//constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
    this.login = () => {
        console.log(`${this.username} has login!`)
    }
};

User.prototype.logout = function () {
    console.log(`${this.username} has logout!`);
    //this will refer to the object which is using this method on 
}
const userOne = new User('luffy', 'luffy@op.io');
const userTwo = new User('zoro', 'zoro@op.io');
const userFourth = new User('sanji', 'sanji@op.io');
console.log(userOne, userTwo, userFourth);
userTwo.login();
userOne.logout();