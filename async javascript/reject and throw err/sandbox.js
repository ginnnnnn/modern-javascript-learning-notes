//async await

const getTodos = async () => {
    const response = await fetch('todos/na2mi.json');
    //if there is url error ,it will still recive a object but couldnt be parse to json
    // the error will still occur to the next line
    if (response.status !== 200) {
        throw new Error(response.statusText);
        //this code will make the promise reject
    }
    //here is the power
    const data = await response.json();
    const response2 = await fetch('todos/luffy.json');
    const data2 = await response2.json();
    const response3 = await fetch('todos/zoro.json');
    const data3 = await response3.json();
    return { data, data2, data3 }

}

// non-blocking ,this will be the last call stack 
getTodos().then(datas => console.log(datas)).catch(err => console.log(err));




