//find() ,return the first value in the array which is fullfilled the condition 
const scores = [10, 22, 33, 12, 55, 66, 123, 1, 23, 6, 8, 90];

const scores_above56 = scores.find(score => {
    return score > 56;
})

console.log(scores_above56);//66




