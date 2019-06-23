//regular function
const calcArea = function (radius) {
    return 3.14 * radius ** 2;
}

//arrow function

const arrowCalcArea = (radius) => {
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log('regular function', area);
const arrowArea = arrowCalcArea(9);
console.log('arrow function', arrowArea);

//cleaner arrow function ,if it just one parameter and only line return code.

const cleanerArrowCalcArea = radius => 3.14 * radius ** 2;
const area7 = cleanerArrowCalcArea(7);
console.log('cleaner Arrow', area7);

//practise arrow functions

const greet = function () {
    return 'Hello world'
};
const arrowGreet = () => 'hellow world';

const bill = function (products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = products[i] + products[i] * tax;
    }
    return total;
};

const arrowBill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = products[i] + products[i] * tax;
    }
    return total;
};

const products = [300, 401, 440, 925, 1728];

const regularBill = bill(products, 0.025);
const arrowFnBill = arrowBill(products, 0.025);

console.log(`regular is ${regularBill}, arrow is ${arrowFnBill}`);
