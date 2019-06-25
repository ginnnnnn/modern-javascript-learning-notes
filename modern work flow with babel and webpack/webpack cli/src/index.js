// import './dom';
//import dom.js as a module

// addTitle('cool'); this wont work, module doesnt share it's owned variable
//each module has it's own scope 
//if we need any variables from a module we need to add export keyword in front of the
//variable we need in that module

import { styleBody, addTitle, contact } from './dom';

addTitle(`cool I said i got this man!!`)
styleBody();
console.log('index index');
console.log(contact);