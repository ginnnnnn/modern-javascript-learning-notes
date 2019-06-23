// class inheritance
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
};

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return user.username !== u.username
        })
    }

}
const userOne = new User('Luffy', 'luffy@op.io');
const userTwo = new User('Zoro', 'zoro@op.io');
const userThree = new Admin('Nami', 'nami@op.io');
console.log(userThree);//new User class obj but with more method and properties
let users = [userOne, userTwo, userThree];

userThree.deleteUser(userTwo);
console.log(users);//[User,Admin] => 0 userOne 1 userThree
