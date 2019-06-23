//function declaration

function greet() {
    console.log('hey world');
}
//no semicolon at the end of the code block

//function expression

const speak = function () {
    console.log('hey expression')
};//this needs a semi colon at the end of the code block,probaly the only one

speak();//works
greet();//works

//the difference between these are callled hoist.
//it rise declaration to global state function

greet_declaration();//works!!!!!

function greet_declaration() {
    console.log('this is how Fn declaration works. it hoist to gobal state.')
}

speak_expression();//won't work!!!! and it blocks everything below it.

const speak_expression = function () {
    console.log('Fn expression wont work if we define the function after the function excute')
};

speak_expression();//Only works after we define it.
