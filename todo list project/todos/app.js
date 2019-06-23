const addForm = document.querySelector('.add');
//get the form
const todos = document.querySelector('.todos')


//add todo
const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    todos.innerHTML += html
}

addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim();
    //trim() will cut the white space before and after strings
    if (todo.length) {
        //check todo has somthing
        generateTemplate(todo);
        //create todo
        addForm.add.value = ""
        //reset the add input
    }
})
//delete todos
todos.addEventListener('click', e => {
    if (e.target.tagName === 'I') {
        e.target.parentElement.remove();
    }
})
//search and filter
const search = document.querySelector('.search');

const filterTodos = (term) => {
    let list = todos.children;
    list = Array.from(list);
    list.filter(todo => {
        return !todo.textContent.toLowerCase().includes(term);
        //it will still look out the text in the li ,even span tag
        //return the are not match
    })
        .forEach(filteredItem => filteredItem.classList.add('filtered'))

    list.filter(todo => {
        return todo.textContent.toLowerCase().includes(term);
        //it will still look out the text in the li ,even span tag
        //return the are  match
    })
        .forEach(filteredItem => filteredItem.classList.remove('filtered'))
}
search.addEventListener('keyup', e => {
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
})
