const greet = (name) => {
    console.log(`hey ${name} ! how do you do?`);
};

greet('nami');
greet('link');
greet('zoro');

class User {
    constructor() {
        this.name = 'link';
        this.age = 30;
    }
}