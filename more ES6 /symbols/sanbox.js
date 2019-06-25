//symbols ,symbol is always unique and primitive type

const symbolOne = Symbol("cody");//no new!!! 
const symbolTwo = Symbol("cody");
console.log(symbolOne, typeof symbolOne);//Symbol() "symbol"
console.log(symbolOne === symbolTwo);//false


const ninja = {};
ninja.age = 30;
ninja["belt"] = 'orange';
ninja["belt"] = "black";
console.log(ninja);//{age: 30, belt: "black"} so we can overwrite it
//but if we use symbols

ninja[symbolOne] = 'luffy';
ninja[symbolTwo] = 'nami';
console.log(ninja);//{age: 30, belt: "black", Symbol(cody): "luffy", Symbol(cody): "nami"}



