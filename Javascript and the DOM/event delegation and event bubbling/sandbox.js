const ul = document.querySelector('ul');
//select ul 

const items = document.querySelectorAll('li');
//select all list elements

/*
items.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
        //prevent event bubbling,it prevent the event goes other object by only this one
        e.target.remove()
        //add click event and remove itself as a callback
    })
});
*/
const btn = document.querySelector('button');
//select button

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    //create a new li 
    li.textContent = 'a new to do';
    //attach text to id
    ul.append(li);
    // insert to ul element;
});

//event bubbling

// ul.addEventListener('click', () => console.log('bubble~'));

// for stop event bubbling by using stopPropagation() in child element

//event delegation

ul.addEventListener('click', e => {
    console.log(e.target);
    //this wound log the target list element
    if (e.target.tagName === 'LI') {
        //check the target has a property tagName and equal to 'LI' 
        e.target.remove();
    }
    //new todo would work
});
//use parent event to target the child element
//child element will bubble up to ul element and it will target the element
