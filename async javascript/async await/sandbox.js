//async await

const getTodos = async () => {
    // put async in front of function will always return a promise no matters what is in inside
    const response = await fetch('todos/nami.json');
    //await will catch the promis of fetch and store in response
    // console.log(response); //response needs to be parse to javascript object
    const data = await response.json(); //this is a promise so without .then() we use await catch it
    // console.log(data)
    //here is the power
    const response2 = await fetch('todos/luffy.json');
    const data2 = await response2.json();
    const response3 = await fetch('todos/zoro.json');
    const data3 = await response3.json();


    return { data, data2, data3 }
}
console.log(1);
console.log(2);
// non-blocking ,this will be the last call stack 
getTodos().then(datas => console.log(datas)).catch(err => console.log(err));
console.log(3);
console.log(4);


// const test = getTodos();
// console.log(test);

// fetch('todos/luffy.json')
//     .then(response => {
//         return response.json()
//     })
//     .then(json => console.log(json))
//     .catch(err => console.log(err));

