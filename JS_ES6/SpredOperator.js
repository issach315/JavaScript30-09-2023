//The spread operator ... is used to expand or spread an iterable or an array. 

const stdNames =["siva","sunil","issach","guru",];

console.log(stdNames);
console.log(...stdNames);




//Copy Array Using Spread Operator

const classAStd = ['a','b','c','d'];
const classBStd = [...classAStd]; 

/*
Here, both variables arr1 and arr2 are referring to the same array.
 Hence the change in one variable results in the change in both variables.

However, if you want to copy arrays so that they do not refer to the same array, 
you can use the spread operator.This way, the change in one array is not reflected 
in the other. 


*/

classAStd.push("e");

console.log(classAStd);

console.log(classBStd);






//Spread Operator with Object

//You can also use the spread operator with object literals. 

const person1 = { personName:"issach",personAge:2000,};

const person2 = {personColor:"black"}

const person3 ={...person1,...person2};

console.log(person3);

/*

Rest Parameter

When the spread operator is used as a parameter, it is known as the rest parameter.

You can also accept multiple arguments in a function call using the rest parameter. 

*/


let fun =function(...args){
    console.log(args);
}

fun(1,2,3,4,5,6,7,8);


//You can also pass multiple arguments to a function using the spread operator

function sum(x,y,z,a,b,c){
    console.log(x+y+z+a+b+c);
}
const sumResult = [1,2,3,4,5,6,7];//You can also pass multiple arguments to a function using the spread operator.
sum(...sumResult)

//js spread


