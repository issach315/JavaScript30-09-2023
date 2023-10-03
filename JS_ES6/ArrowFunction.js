/*
The syntax of the arrow function is:

let myFunction = (arg1, arg2, ...argN) => {
    statement(s)
}

*/


// we are assing the function to the variable 
let addition = (number1, number2) => {

    return `addition of ${number1} and ${number2} is = ` + number1 + number2;
}

console.log(addition(10, 10));


let multiply = (x, y) => `multiplecation of ${x} and ${y} is = ` + x * y;

console.log(multiply(12, 2));

let age = 5;


// Arrow function with Expression 

let welcome = (age < 18) ? () => console.log('child') : () => console.log('Adult');

welcome();



// const sa = () => { console.log("hi"); }

// sa();

