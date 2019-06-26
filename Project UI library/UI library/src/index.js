import Tootip from './ninja-ui/tooltip';
//create a tooltip
const span = document.querySelector('.tooltip');

const tooltip = new Tootip(span);

tooltip.init();

//create a dropdown
import Dropdown from './ninja-ui/dropdown';

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.showsToggle();
});

// create tabs

import Tabs from './ninja-ui/tabs';

const tabs = document.querySelector('.tabs');
const tabsInstance = new Tabs(tabs);

tabsInstance.init();


//create snackbar
import Snackbar from './ninja-ui/snackbar';

const snackbar = new Snackbar();
snackbar.init();

const btn = document.querySelector('button');
btn.addEventListener('click', e => {
    snackbar.show('kaboom!!');
})



import * as serviceWorker from "./serviceWorker";
serviceWorker.unregister();
//this is for unsubscribing serviceWorker


