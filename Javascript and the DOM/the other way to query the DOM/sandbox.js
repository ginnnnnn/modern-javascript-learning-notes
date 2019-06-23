//get Element by Id

const title = document.getElementById('page-title');
console.log(title);//<h1 id='page-title'>the other way to query the DOM</h1>

//get Element by class name

const errors = document.getElementsByClassName('error');
console.log(errors);//HTMLCollection(2) [p.error, div.error]
console.log(errors[0]);//<p class="error">this is an error message</p>
//but no forEach() method

//get Element by tag name

const paras = document.getElementsByTagName('p');

console.log(paras);//HTMLCollection(3) [p, p, p.error]
console.log(paras[1]);//<p>Ace is dead</p>


