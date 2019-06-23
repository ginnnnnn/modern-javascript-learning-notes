//returning values

const calcArea = function (radius) {
    let area = 3.14 * radius ** 2;
    console.log(area)
};
calcArea(5);//console.log() 78.5
console.log(calcArea(5));//wont work,
//it will run console.log() 78.5 but return undefine

const calcArea2 = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
};

const area6 = calcArea2(6);
console.log(calcArea2(2));//12.56

console.log(area6);//113.04

const calcArea_clean = function (radius) {
    return 3.14 * radius ** 2;
};

console.log(calcArea_clean(10));//314