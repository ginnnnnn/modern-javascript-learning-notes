let ninjas = ['ryu', 'ken', 'chun-li'];

ninjas[1] = 'akuma';
console.log(ninjas[1]);//'akuma'
console.log(ninjas.length);//3

//array method

let result = ninjas.join(',');
//this would join all the elements of the array and transfer into a strings
console.log(result);// 'ryu,akuma,chun-li'

//indexOf()

let chun_li_index = ninjas.indexOf('chun-li');
console.log(chun_li_index);//2

//concat() , concate an array to another array,and return a new array

let concat_array = ninjas.concat(['blanka', 'juli']);
console.log(concat_array);// ["ryu", "akuma", "chun-li", "blanka", "juli"]

//push(), push a new value to a array ,return length of the new array!! alter the origin array

let push_array = ninjas.push('guy');
console.log(push_array);//4
console.log(ninjas);//["ryu", "akuma", "chun-li", "guy"]

//pop(), take off the end value. alter the original array,return the last value

let pop_ninjas = ninjas.pop();//["ryu", "akuma", "chun-li", "guy"].pop()
console.log(pop_ninjas);//"guy"
console.log(ninjas);//["ryu", "akuma", "chun-li"]