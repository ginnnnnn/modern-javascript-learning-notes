const article = document.querySelector('article');

console.log(article.children);
//children property gives a Htmlcollection of all child node !!no forEach() method

//Array.from() passing an array likes object and it will return an proper array
//it doesnt alter the original array
/*
const nodeArray = Array.from(article.children);
console.log(nodeArray);

nodeArray.forEach(node => {
    node.classList.add('article-element');
})
*/

const title = document.querySelector('h2');


//parent 
console.log(title.parentElement);//<article>...</article>
console.log(title.parentElement.parentElement);//<body>...</body>
//siblings
console.log(title.nextElementSibling);//<p>Lorem ipsum, dolor dolorem ea? Quo!</p>
console.log(title.previousElementSibling)//null
console.log(title.nextElementSibling.previousElementSibling)//<h2>article title</h2>

//chaining

console.log(title.nextElementSibling.parentElement.children)//Html collection

//children gives html collection ,childNodes gives nodeList
