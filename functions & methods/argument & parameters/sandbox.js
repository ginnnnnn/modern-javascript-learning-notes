//arguments and parameters

const speak = function (name = 'Luke', time = "night") {  //name is an parameter
    console.log(`Good ${time}, ${name}`)
};


speak('Gin', 'morning');  //Good morning, Gin
//this is an argument
//if we dont pass any arguments like speak(),it will show `Good undefined,undefined`
//to avoid this we can declare the default in the function expression
// like name= 'luke' ,time ='night'

speak();//Good night, Luke

speak('Vicky');//Good night, Vicky