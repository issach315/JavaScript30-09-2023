/*
The setTimeout() method executes a block of code after the specified time. 
The method executes the code only once.


The commonly used syntax of JavaScript setTimeout is:

setTimeout(function, milliseconds);

Its parameters are:

function - a function containing a block of code

milliseconds - the time after which the function is executed

The setTimeout() method returns an intervalID, which is a positive integer.
*/

// function greet(){
//     console.log("welcome... Issach");
// }
// let interValId = setTimeout(greet,3000);
// console.log("Greetings... :)");
// console.log('Time Taken : '+interValId);


//dispaly time every 3 sec

function showTime(){

    let dateTime = new Date();

    let time = dateTime.toLocaleTimeString();

    console.log(time);

    setTimeout(showTime,5000);
}
//showTime();


let count =0;
function increaseCount(){

    ++count;

    console.log(count);
}

let id = setTimeout(increaseCount,5000)

clearTimeout(id);


console.log('Counting Stop');

//setTimeout(function, milliseconds, parameter1, ....paramenterN);


let greet =(sName,sAge)=>{
    console.log(`hello ${sName } u r age : ${sAge}`);
}

setTimeout(greet,3000,'issach',23)