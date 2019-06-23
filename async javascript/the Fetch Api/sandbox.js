//the fetch api ,this is a builded in http request method,it automatically return a promise
// it doesnt do JSON.parse() 
fetch('todos/luffy.json')
    .then(response => {
        //response is a javascript object with lots of buildedin method .json is one
        // console.log(response)
        return response.json()//.json() return a promise
        // return JSON.parse(response) won't work
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));

