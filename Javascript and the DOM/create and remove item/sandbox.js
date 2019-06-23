//remove element

const ul = document.querySelector('ul');
// select ul element

// ul.remove();
//remove element itself,remove ul list

const listItems = document.querySelectorAll('li');
// selector all li elements , return nodeList
listItems.forEach(item => {
    item.addEventListener('click', e => {
        e.target.remove();
    })
    //add event click to remove the element itself
})

//add element

const btn = document.querySelector('button');
//select button
btn.addEventListener('click', () => {
    /*ul.innerHTML += '<li>new to do</li>'
   // this is one way */
    const li = document.createElement('li');
    //create a new li element
    li.textContent = 'new to do la';
    //add text into it
    ul.append(li);
    //use appendChild(element) to insert to ul element
    //prefer append() ,appendChild is DOM method, append is javascript method
    //appendChild only takes element as a parameter but append can take string aswell
    //use ul.prepend(li); will make li element to the top of list
})