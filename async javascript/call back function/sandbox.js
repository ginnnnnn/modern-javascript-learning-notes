//a callback function detail

const getTodos = (url, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {

            const reponse = request.responseText//set data response
            if (callback) {
                callback(undefined, reponse);
                //if err is undefined -if !err
                //pass reponse to a callback function as data
            }
        } else if (request.readyState === 4) {
            callback('could not fetch', undefined)
            //err == 'could not fetch' data =undefined
        }
    })

    request.open('GET', url);
    request.send();
}
//create a async callback function
getTodos('https://jsonplaceholder.typicode.com/todos');
getTodos('https://jsonplaceholder.typicode.com/t2odos', (err, reponse) => {
    if (!err) {
        console.log(reponse)
    } else {
        console.log(err)
    }
});
