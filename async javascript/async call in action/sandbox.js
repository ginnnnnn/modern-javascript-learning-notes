console.log(1);
console.log(2);

let time = 0;
setTimeout(() => {
    time = 3;
}); //set to the last callstack and excute when all stack are clear
console.log(3);
console.log(4);
console.log(5);
console.log(time);//0 ,time hasnt change
setTimeout(() => {
    console.log(time);
}, 3000)//3 , the very last callstack and excute after 3 seconds