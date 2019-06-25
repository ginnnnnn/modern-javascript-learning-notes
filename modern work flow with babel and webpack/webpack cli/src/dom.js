console.log('dom dom');

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    body.append(h1);
}

const contact = 'zoro@op.io';

export { styleBody, addTitle, contact };//also work this way.