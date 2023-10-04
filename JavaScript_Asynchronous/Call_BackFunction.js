/*
In JavaScript, you can also pass a function as an argument to a function. This function that
 is passed as an argument inside of another function is called a callback function.
*/

function eating(item,atTime){

    console.log(`special is ${item}`);

    atTime();
}

function atTime(){
    console.log('nice dinner .. .. .. .. .. .. .. :)');
}
eating('biriyani',atTime);