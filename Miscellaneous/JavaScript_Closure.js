/*In JavaScript, closure provides access to the outer scope of a function from inside 
 the inner function, even after the outer function has closed.*/


 function wish(){

    let name = "issach";

    function displayWish(){

        return `hello ${name}`;
    }

    return displayWish;
 }

 const cFuntion = wish();

console.log( cFuntion());


//data privacy

function sum() {
    let a = 0;
    function increaseSum() {

        // the value of a is increased by 1
        return a +=1;
    }
    return increaseSum;
}

let x = sum();

let a = 5;// this can not change the varible which is inside function 

console.log(x()); 
console.log(x()); 
console.log(a); 







