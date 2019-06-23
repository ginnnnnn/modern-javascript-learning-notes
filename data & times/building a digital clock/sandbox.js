//

const clock = document.querySelector('.clock');
const date = document.querySelector('.date');


const tick = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const d = now.getDate();
    const h = now.getHours();
    const min = now.getMinutes();
    const s = now.getSeconds();
    const dy = now.getDay();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //sunday is the first day
    const clockHtml = `
    <span>${h}</span>:
    <span>${min}</span>:
    <span>${s}</span>
    `
    const dateHtml = `
    <span>${week[dy]}</span>
    <span>${y}</span>.
    <span>${m}</span>/
    <span>${d}</span>
    `
    clock.innerHTML = clockHtml;
    date.innerHTML = dateHtml;
    // it has to be called and updated inside the function,cus the function excute every 
    //sec not outside
};
setInterval(tick, 1000);