const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
//select input by id='username'


form.addEventListener('submit', e => {
    e.preventDefault();
    //submit event on browser default behavier is page refresh
    /* console.log(username.value);
     //log the input value aka user input
     //this is one way of getting the value of an input in the form
     */
    console.log(form.username.value);
    //this only works if the input has id attribute,then we can use dot notaion
    //to grap it from the form element like an property
});
//the difference between click event in a form to a  submit event is
//click event only fire when we click the button but submit event fire when we click
//submit or press enter when the input is filled