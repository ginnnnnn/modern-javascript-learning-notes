//JSON.parse

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


getTodos('todos/luffy.json').then(data => console.log(data)).catch(err => console.log(err));



//create a async callback function

// getTodos('todos/luffy.json', (err, response) => {
//     console.log(response)
//     getTodos('todos/nami.json', (err, response) => {
//         console.log(response)
//         getTodos('todos/zoro.json', (err, response) => {
//             console.log(response)
//         })
//     })
// });//callback hell

//promise example ,2 parameters resolve, reject

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something here  
        // if successed ,resolve(data) would fire
        resolve('got data');
        //if err,reject(err) would fire
        reject('no data');
    });
};

//promise will fire .then function and pass the data when it resolve()
/*  one way
getSomething().then(data => {
    console.log(data);
}, err => {
    console.log(err)
});
*/
// other way

// getSomething().then(data => console.log(data)).catch(err => console.log(err));