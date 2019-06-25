const customers = [
    { name: 'cookie', age: 33 },
    { name: 'peach', age: 13 },
    { name: 'cocktail', age: 133 },
    { name: 'lufa', age: 9 },
    { name: 'tika', age: 91 },
    { name: 'popolala', age: 88 },

];

const getOldpeople = (people) => {
    return customers.filter(person => person.age > 20);
};

// export default customers;
//export default variable ,we still can export other variable

export { getOldpeople, customers as default };