const popupWrapper = document.querySelector('.popup-wrapper');
//select popup-wrapper element
const button = document.querySelector('button');
//selector button element

button.addEventListener('click', (e) => {
    popupWrapper.style.display = 'block'
})
//add style display:block to wrapper

const popupClose = document.querySelector('.popup-close');

popupClose.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
});
//add click event to the cross for closing the popupwrpper
popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})
//add click event to popup wrapper for closing popupwrapper