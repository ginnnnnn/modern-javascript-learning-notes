const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        //4 means completed
        // console.log(request.status)// status code 200 304 success ,404 not success
        console.log(request.responseText) // data recieve
    } else if (request.readyState === 4) {
        console.log('could not fetch')
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/tod2os');
request.send();