//adding and changing content 
//using innerText

const para = document.querySelector('p');
console.log(para.innerText);//Luffy
//innerText is a property not a method
para.innerText = 'Nami'; //change to Nami

console.log(para.innerText);//Nami

para.innerText += ' has great body';//append to it

console.log(para.innerText);//Nami has great body

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    console.log(p.innerText);
    p.innerText += ' new text added!!';
});
paras.forEach(p => {
    console.log(p.innerText);
});

//innerHTML

const content = document.querySelector('.content');

console.log(content.innerHTML);//this is the content

content.innerHTML += '<h2>this is a new content </h2>';

const people = ['Luffy', 'Nami', 'Zoro'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});