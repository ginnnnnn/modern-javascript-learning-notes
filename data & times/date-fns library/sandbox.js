//version v1.9.0
const now = new Date();
console.log(dateFns.isToday(now));//if true, works and also now is today

const someday = new Date(883929297329);

console.log(dateFns.isToday(someday));//false

//formating options

console.log(dateFns.format(now, "YYYY"));//2019
console.log(dateFns.format(now, "MMMM"));//June
console.log(dateFns.format(now, "MMM"));//Jun
console.log(dateFns.format(now, "Do"));//16th  day of the month
console.log(dateFns.format(now, "ddd"));//Sun
console.log(dateFns.format(now, "dddd"));//Sunday
console.log(dateFns.format(now, "A"));//AM
console.log(dateFns.format(now, "a"));//am
console.log(dateFns.format(now, "HH"));//00  24hours formate
console.log(dateFns.format(now, "hh"));//12  12 hours formate
console.log(dateFns.format(now, "mm"));//56   minutes
console.log(dateFns.format(now, "ss"));//46   seconds

console.log(dateFns.format(now, "YYYY/MMMM/Do dddd hh:mm:ss a"))
//=>2019/June/16th Sunday 01:02:54 am

//comparing date
const before = new Date("June 16 2019 01:19:33");

console.log(dateFns.distanceInWords(now, before));
console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
// add ago
console.log(dateFns.distanceInWords(now, before, { includeSeconds: true }));
// include second but only the distance is small to a minute


//Important! Note that non-CommonJS packages (Bower, CDN) don't support I18n yet
console.log(dateFns.distanceInWords(now, before, { locale: zh_tw }));//not working







