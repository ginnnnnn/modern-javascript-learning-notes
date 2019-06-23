//callbacks 

const myFunction = (callbackFunction) => {
    let value = 60;
    callbackFunction(value);
};

//insert a function into a function

myFunction((v) => {
    console.log(v);
});

//forEach() method

let people = ['naruto', 'sazuke', 'nami', 'luffy', 'zoro'];

people.forEach((person, i) => console.log(`Number ${i + 1} is ${person}`));

//insert a callback into a forEach() method;

const mangaGreet = (person, i) => {
    console.log(`${person}!! you are no.${i + 1}`);
}

people.forEach(mangaGreet);