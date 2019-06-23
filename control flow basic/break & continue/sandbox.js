//break and continue

const scores = [50, 25, 44, 52, 100, 21, 99, 52];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 30) {
        console.log('hmm ,try hard ok!');
        continue;
        //when scores < 30 , it will ignore the rest of codes and back to loops
        // means it won't console.log 'Your scores: ', 25
    }
    console.log('Your scores: ', scores[i])
    if (scores[i] === 100) {
        console.log('congrats, You got the top scores!');
        break;
        // the code will stop here 100.
    }
}