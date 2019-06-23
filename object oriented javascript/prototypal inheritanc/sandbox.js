//constructor function

function User(username, email) {
    this.username = username;
    this.email = email;
};
User.prototype.login = function () {
    console.log(`${this.username} has login!`);
    //this will refer to the object which is using this method on 
};
User.prototype.logout = function () {
    console.log(`${this.username} has logout!`);
};

function Admin(username, email, title) {
    User.call(this, username, email);
    //call() ,can excute the chained function and bind to a new function object,
    //the first argument is the target we want to bind  ,like super() in class 
    this.title = title
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {
    // console.log('delete');
}
const userOne = new User('luffy', 'luffy@op.io');
const userTwo = new User('zoro', 'zoro@op.io');
const userThree = new Admin('sanji', 'sanji@op.io', 'black feet');
console.log(userOne, userTwo, userThree);
userTwo.login();
userOne.logout();
userThree.login();