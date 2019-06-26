import './styles/tooltip.css';

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }

    init() {
        const tip = document.createElement('div');
        //create a div element
        tip.classList.add('tip');
        //add class name tip
        tip.textContent = this.message;
        //set message in the element
        this.element.appendChild(tip);
        //append the tip to the element
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });
        //add active class name when we hover over it
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        })
        //remove active when our mouse hover away it



    }
}

export { Tooltip as default };