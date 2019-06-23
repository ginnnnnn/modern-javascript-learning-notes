// super()
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
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter(u => {
            return user.username !== u.username
        })
    }

}
const userThree = new Admin('nami', 'nami@op.io', 'sexy');
//when a class object created by extend it wont run constructor again the parameters are
//automatically included, by adding other parameters we need to use super() in constructor()
//and passing the old arguments into super parantheses
console.log(userThree);