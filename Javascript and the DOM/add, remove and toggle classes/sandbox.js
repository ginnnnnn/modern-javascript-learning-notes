/*
const content = document.querySelector('p');

console.log(content.classList);//DOMTokenList ["error", value: "error"]
// classList property return an array contains all class Name!

// Add class ,add() is a method within the classList

content.classList.add('success');

//Remove class, remove() is a method within the classList

content.classList.remove('success');

content.classList.add('error');

*/

const paras = document.querySelectorAll('p');

paras.forEach(function (para) {
    if (para.textContent.includes('error')) {
        para.classList.add('error')
    }
    if (para.textContent.includes('success')) {
        para.classList.add('success')
    }
})

// the difference between using .innerText and textContext
// <p>lorem ipusnm <span style='display:none;'> error </span>jcxwlkmkm </p>
//innerText only give you the visiable text 

//toggle

const title = document.querySelector('.title');

title.classList.toggle('test');
// it doesnt have the test class but it has now when we use toggle('test')
title.classList.toggle('test');
//if it has the 'test' class it will remove the class