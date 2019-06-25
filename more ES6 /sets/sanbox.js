//sets ,sets is a new data structure it doesnt allow a dupicate value

const names = ['mario', 'zelda', 'mario', 'link'];

console.log(names);//["mario", "zelda", "mario", "link"]

const nameSet = new Set(names);//only way of creating Set

console.log(nameSet);//{"mario", "zelda", "link"} it's not an obj, and only one mario

// const uniq = [...new Set(names)]; also works
const uniqueNames = [...nameSet];//we can use spread syntax
console.log(uniqueNames);//["mario", "zelda", "link"]

const ages = new Set();

ages.add(20);// Set method
console.log(ages);//{20}
//these are chainable
ages.add(30).add(32);
console.log(ages);//{20, 30, 32}
ages.add(20);//already exist 20
console.log(ages);//{20, 30, 32}
ages.delete(20);
console.log(ages);//{30, 32}

console.log(ages.length);//undefine no length property
console.log(ages.size);//2
console.log(ages.has(30));//true
ages.clear();
console.log(ages);//{}
const peopleSet = new Set([
    { name: "zelda", age: 99 },
    { name: "zelda", age: 99 },
    { name: "zelda", age: 99 }
]);
console.log(peopleSet);// {{…}, {…}, {…}} shallow comparson

peopleSet.forEach(per => {
    console.log(per.name);
})

