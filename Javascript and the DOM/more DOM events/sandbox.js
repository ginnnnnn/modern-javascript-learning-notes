const copy = document.querySelector('.copy-me');
//select the p tag with class copy-me


//on copy
copy.addEventListener('copy', () => {
    console.log('bi bi bi you are copying me')
});

const box = document.querySelector('.box');
//select the div .box


//on mouse move

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    //e.offsetX is the x axis from top left edge of the box to right
    //e.offsetY is the Y axis from top left edge of the box to bottom
    e.target.textContent = `X:${e.offsetX},Y:${e.offsetY}`
});

//on scroll down

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
    //this is the mouse position relative to the page
})