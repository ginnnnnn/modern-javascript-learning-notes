const form = document.querySelector('.signup-form');
//get form element
const feedback = document.querySelector(".feedback");
//get feedback element
form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const pattern = /^[a-zA-Z]{6,}$/
    if (pattern.test(username)) {
        feedback.textContent = 'this is ok';
        //set text into the feedback element
    } else {
        feedback.textContent = 'no ,this is not good'
    }
})