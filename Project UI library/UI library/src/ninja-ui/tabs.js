import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTab(e);
                //by passing e to target the element so we can out sourse it
                this.toggleContent(e);
                // e.target.classList.toggle("active");
            })
        })
    }
    toggleTab(e) {
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
            //remove all li active class
        });
        //add active
        e.target.classList.add('active');
    }
    toggleContent(e) {
        //remove all content element active class
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add active class,use e.target.getAttribute to source data-target #name
        // this.container.querySelector(e.target.getAttribute('data-target'))
        //     .classList.add('active');
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
};

export { Tabs as default }