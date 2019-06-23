//querying the DOM ,querySelector ,use CSS selector

const para = document.querySelector('p');//by passing 'p' for p tag
//this will grap the first p tag ,from the top of DOM

console.log(para);//<p>Luffy</p>

const p_error = document.querySelector('.error'); //by passing .error for class error

console.log(p_error);//<p class="error">this is an error message</p>

//get the second div with error class name

const div_error = document.querySelector('div.error');//CSS combine selector

console.log(div_error);//<div class="error">this is an another error</div>

//copy selector from browser 

const h1 = document.querySelector('body > h1');//copy from browser element

console.log(h1);//<h1>the querySelector</h1>

//select mutiple elements querySelectorAll()

const paras = document.querySelectorAll('p');
//this will return an colloctioncontains all the p tag
// !!! it is not a array,but we can use [] notation to get the single element we needs 
console.log(paras);//NodeList(3) [p, p, p.error]
console.log(paras[0]);//<p>Luffy</p>
console.log(paras[1]);//<p>Ace is dead</p>
console.log(paras[3]);//undefined

//use forEach()

paras.forEach(p => {
    console.log(p)
});/*
<p>Luffy</p>
<p>Ace is dead</p>
<p class="error">this is an error message</p>
 */

const errors = document.querySelectorAll('.error');//get all the class named error elements

console.log(errors);//NodeList(2) [p.error, div.error]



