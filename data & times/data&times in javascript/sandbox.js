//dates and times
const now = new Date();

console.log(now);
//Sat Jun 15 2019 21:45:52 GMT+0800 (台北標準時間)
console.log(typeof now);//object

//years , months , days , times

console.log('getFullYear:', now.getFullYear());//2019
// getFullyear() date object method
console.log('getMonth:', now.getMonth());//5?? 
//getMonth() method will get the index of imaginary array of 12 month from 0 -11;
console.log('getDate:', now.getDate());//15 
console.log('getDay:', now.getDay());//6, saturday
console.log('getHours:', now.getHours());//21, saturday 9pm
console.log('getMinutes:', now.getMinutes());//48
console.log('getSeconds:', now.getSeconds());//7

//timestamps

console.log('timestamps', now.getTime())//1560606660293 ny milieseconds
// this is the milliseconds since 1, january,1970

//date strings ,toDateString() and toTimeString() make Date()

console.log(now.toDateString());//Sat Jun 15 2019
console.log(now.toTimeString());//21:54:49 GMT+0800 (台北標準時間)

//toLocalString
console.log(now.toLocaleString());//2019/6/15 下午9:57:18
console.log(now.toLocaleDateString());//2019/6/15
console.log(now.toLocaleTimeString());//下午9:57:59



