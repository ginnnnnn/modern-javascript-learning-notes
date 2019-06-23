const correctAnswers = ['B', 'B', 'B', 'B'];
//set correct answers
const form = document.querySelector('.quiz-form');
//select form element

const result = document.querySelector('.result');
//select result element

//add submit event to the form element
form.addEventListener('submit', e => {
    e.preventDefault();
    //prevent refresh
    let score = 0;
    //set default score
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //form.name.value is the answer, not the id !but the name,different to input type"text"
    //for radio type is name targeted
    userAnswers.forEach((answer, i) => {
        if (answer === correctAnswers[i]) {
            //check answer
            score += 25;
            //update score
        }
    })
    //show result on page
    scrollTo(0, 0);
    //scroll to the top
    const pSpan = result.querySelector('span');
    //select span element in .result element
    result.classList.remove('d-none');
    let animateScore = 0;
    //set initial score for animate purpose
    const scoreTimer = setInterval(() => {
        pSpan.textContent = animateScore + '%';
        //show on span element
        if (animateScore === score) {
            //stop adding when it;s equal to desired score and stop clearInterval
            clearInterval(scoreTimer);
        } else {
            animateScore++
            //add 1 for every 10 milescondes
        }
    }, 10)
    scoreTimer;
    //run setInterval()
})

//window object, global object
/*
console.log('hello');
is equal to window.console.log('hello')
document.querySelector('form');
is equal to window.document.querySelector('form);
window.scrollTo(x,y)
*/

//setInterval(callback,times); it would fire every times ,if set 1000, means it will excute
//every second, and use clearInterval(timer) inside  the setInterval() callback
//to stop setInterval()!!
/*
let i = 0;
const timer = setInterval(() => {
    i++
    console.log('hello')
    if (i >= 5) {
        console.log("stop")
        clearInterval(timer)
    }
}, 1000);

timer; */
