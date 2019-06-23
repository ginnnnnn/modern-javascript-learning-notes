const form = document.querySelector('.signup-form');
//get the form element 
const feedback = document.querySelector('.feedback');
//get the feedback elememt
const validPattern = /^[a-zA-Z]{6,}$/;
//set up validation pattern in global scope

form.addEventListener('submit', e => {
    e.preventDefault();
    //prevent it refresh
    const username = form.username.value;
    //get the value of the input with the id username

    if (validPattern.test(username)) {
        //check the input
        feedback.textContent = 'this is valid!'
        //give feedback
    } else {
        feedback.textContent = 'at least 6 characters and all alphabets'
    }
})

//live feedback

form.addEventListener('keyup', e => {
    console.log(e);
    //keyup event it fires everytime we press keyboard
    // console.log(e.target.value, form.username.value);
    if (validPattern.test(e.target.value)) {
        /*  form.username.classList.remove('invalid');
          form.username.classList.add('valid'); */
        form.username.setAttribute('class', 'valid');
        //this way is better . it complete overwrite the class attribute
    } else {
        /*   form.username.classList.remove('valid');
          form.username.classList.add('invalid'); */
        form.username.setAttribute('class', 'invalid');
    }
})