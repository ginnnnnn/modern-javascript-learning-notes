//href is an html attribute ,class is an html attribute
const link = document.querySelector('a');

console.log(link.getAttribute('href')) //https://www.google.com
//argument is required!

link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));//error ,the class name

mssg.setAttribute('class', 'success');
console.log(mssg.getAttribute('class'));//success

mssg.setAttribute('style', 'color: blue;');//it will create the attribute which was not exit

