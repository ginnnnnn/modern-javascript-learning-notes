const greet = (name) => {
    console.log(`hey ${name} ! how are you?`);
};

greet('luffy');
greet('nami');
greet('zoro');

class User {
    constructor() {
        this.name = 'zoro';
        this.age = 120
    }
}