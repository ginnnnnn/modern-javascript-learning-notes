const title = document.querySelector('h1');

title.setAttribute('style', 'margin: 50px;');//it will overwrite all the style

console.log(title.style);// this is the javascript property for styling
/*CSSStyleDeclaration {0: "margin-top", 1: "margin-right", 2: "margin-bottom", 3: "margin-left", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …} */
console.log(title.style.margin);//50px

title.style.color = 'orange';//cool!! passing string for the value,this is wont overwrite

title.style.fontSize = '50px';//in CSS it called font-size but in javascript use cammelcase
title.style.margin = "";//delete the style by set the value to empty string