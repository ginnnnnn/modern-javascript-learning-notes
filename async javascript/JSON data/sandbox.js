//JSON.parse

const getTodos = (url, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)//parse the JSON data format to js object
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch', undefined)
        }
    })

    request.open('GET', url);
    request.send();
}
//create a async callback function
getTodos('todos.json', (err, reponse) => {
    //get our own json file via http 
    if (!err) {
        console.log(reponse)
    } else {
        console.log(err)
    }
});
