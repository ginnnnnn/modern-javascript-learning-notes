//timestamps

const before = new Date('February 1 2019 7:30:59');
const now = new Date();//this will be vary everytime when we excute this code.

console.log(now.getTime());//1560610407142
// this is a number of milliseconds since 12:00 am of 1st of january of 1970.
console.log((before.getTime()));//1548977459000

const diff = now.getTime() - before.getTime();
//11633381590 , this is the time difference in milliseconds
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins);//193900
const hours = Math.round(mins / 60);
console.log(hours);//3232 
const days = Math.round(hours / 24);
console.log(days); //135days

console.log(`this code was written by ${days} days ago`);

//converting timestamp to time object
const timestamps = 1649988888888;
console.log(new Date(timestamps));//Fri Apr 15 2022 10:14:48 GMT+0800 (台北標準時間)

