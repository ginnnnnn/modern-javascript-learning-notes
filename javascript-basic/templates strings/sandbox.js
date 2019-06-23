//templates strings

const title = 'Best butt of 2019';
const author = 'Sakura Ringo';
const likes = 100;


//concatenation way

let result = 'the porn called ' + title + ' acted by ' + author + ' has ' + likes + ' likes.';
console.log(result)
//the porn called Best butt of 2019 acted by Sakura Ringo has 100 likes.

//template string way ,`` use backticks

result = `the porn called ${title} acted by ${author} has ${likes} likes.`;
console.log(result);
//the porn called Best butt of 2019 acted by Sakura Ringo has 100 likes.


//create html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This porn has ${likes}</span>
`;
console.log(html);