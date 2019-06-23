const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState) 
    //=> XMLHttpRequest object{...},1 XMLHttpRequest object{...},2 ..
    if (request.readyState === 4) {
        //4 means completed
        console.log(request.responseText) // data recieve
    }
})
// readystatechange all lower case, request.readyState ,cammal case
//start 0 and recive 1,2,3,4 state
/* 
0 UNSENT
1 OPENED ,open() called
2 HEADERS_RECIEVED ,send() called and headers are avaiable
3 LOADING Downloading ; responseText holds partil data
4 DONE ,the operation is complete
 */
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();