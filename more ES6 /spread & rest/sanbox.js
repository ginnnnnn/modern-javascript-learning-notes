//rest parameter ,if we need to put mutiple parameters 
//as arguments like num1,num2,num3,num4..,put ...nums it will boundle it up to an array
const double = (...nums) => {
    //do something
    return nums.map(num => num * 2);
};

const result = double(1, 2, 3, 4, 5, 3, 44, 5);
console.log(result); //got a array with nums double


//spread syntax array , it uppack the array an return each value

const people = ['ryo', 'king', 'john', 'rog'];
console.log(...people);//ryo king john rog

const newPeople = ['mario', 'link', 'zelda', ...people];
console.log(newPeople);//["mario", "link", "zelda", "ryo", "king", "john", "rog"]

//spread syntax object

const person = { name: 'sanji', skill: 'cooking', interesting: 'women' };

const personClone = { ...person };//this will actually copy the object not a pointer
console.log(personClone);
const crew = { someone: ["luffy", "nami"], ...person };
console.log(crew);


