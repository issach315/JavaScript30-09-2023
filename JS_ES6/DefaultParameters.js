// we are assign the default parameters to the function 
function sum(x = 5 , y = 7){
    return x + y ;
}
console.log(sum(1));// we can also pass when calling the function ,if default parameters already set  

// if we pass single parameter while calling the function it is assigned to the first parameter in function





//Passing Function Value as Default Value

const add = ()=>2;

const calculate = function(x , y =x*add()){

    return x+y;
}
console.log(calculate(12));


