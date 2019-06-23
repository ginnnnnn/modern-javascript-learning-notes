const todos = [
    { text: 'meat!', author: "Luffy" },
    { text: 'coin!', author: "Nami" },
    { text: 'boobs!', author: "Sanji" }
];

//turn it to string json file

localStorage.setItem('todos', JSON.stringify(todos));

let storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos);


