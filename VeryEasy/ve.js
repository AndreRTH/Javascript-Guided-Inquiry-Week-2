// VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function min (x,y) {
    if (x < y) {
        return x; 
    }
    else {
        return y; 
    }
    
}

let num1 = parseInt(prompt('Hey, how about you put in two arguments so I can return their minimum?')); 
let num2 = parseInt(prompt('hey buckaroo, need that second value'))
let answer;

if (num1 < num2) {
   answer = min(num1,num2);
}
else {
    answer = min(num1,num2);
}

console.log(answer);
alert(`hey pal, ran those numbers and looks like ${answer} is the minimum`);