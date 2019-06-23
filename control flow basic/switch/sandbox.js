const grades = 'a'

//switch , it takes strict evaluation , like ===
switch (grades) {
    case 'A':
        console.log("that's the best!");
        break;
    case 'B':
        console.log("that's great");
        break;
    case 'C':
        console.log("You are just ok");
        break;
    case 'D':
        console.log("try again");
        break;
    case 'E':
        console.log("I need to talk to your parents");
        break;
    case 'F':
        console.log("get out!");
        break;
    default:
        console.log("that is just not right!");
}


//if else statements
if (grades === 'A') {
    console.log("that's the best!");
} else if (grades === 'B') {
    console.log("that's great");
} else if (grades === 'C') {
    console.log("You are just ok");
} else if (grades === 'D') {
    console.log("try again");
} else if (grades === 'E') {
    console.log("I need to talk to your parents");
} else if (grades === 'F') {
    console.log("get out!");
} else {
    console.log("that is just not right!");
}