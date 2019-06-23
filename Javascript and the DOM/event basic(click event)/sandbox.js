const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log('oh ya!')
})

const todoItems = document.querySelectorAll('li');

todoItems.forEach(item => {
    const itemText = item.textContent
    item.addEventListener('click', e => {
        // console.log(itemText)
        // console.log(e)
        console.log(e.target)
        e.target.style.textDecoration = 'line-through';

    })
})