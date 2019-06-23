//chaining promise

const getTodos = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)//parse the JSON data format to js object
                resolve(data);
            } else if (request.readyState === 4) {
                reject('somthing wrong');
            }
        })

        request.open('GET', url);
        request.send();

    })
};


getTodos('todos/luffy.json')
    .then(data => {
        console.log(data)
        return getTodos('todos/nami.json')
    })
    .then(data => {
        console.log(data);
        return getTodos('todos/zoro.json')
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
//because .then will fire when the previous function complete , then previous function
//return a promise so when promise resolve or reject .then will called
