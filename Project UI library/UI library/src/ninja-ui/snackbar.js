import './styles/snackbar.css';

class Snackbar {
    constructor() {
        this.snackbar = document.createElement('div');
    }

    init() {
        //add class name snackbar to the div and append to body
        this.snackbar.classList.add('snackbar');
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(message) {
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active');
        setTimeout(() => {
            this.snackbar.classList.remove('active');
        }, 4000)
    }
};

export { Snackbar as default };