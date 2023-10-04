/*
    ---->> JavaScript Destructuring

    The destructuring assignment introduced in ES6 makes it easy to assign
    array values and object properties to distinct variables. 

*/

//Before ES6 

const countery ={

    counteryName:"India",
    counteryLanguage:"Hindi",
    counteryPopulation:"135Cr"
}

let nationName =countery.counteryName;
let nationLang =countery.counteryLanguage;
let nationPopulation =countery.counteryPopulation;

console.log(nationName);
console.log(nationLang);
console.log(nationPopulation);




// After ES6 

/*When destructuring objects, you should use the
 same name for the variable as the corresponding object key.*/

let { counteryName , counteryLanguage , counteryPopulation}=countery;

console.log(counteryName);
console.log(counteryLanguage);
console.log(counteryPopulation);




//If you want to assign different variable names for the object key, you can use

let {counteryName:cName,counteryLanguage:cLang,counteryPopulation:cPop}=countery;

console.log(cName);
console.log(cLang);
console.log(cPop);

/*
Array Destructuring
You can also perform array destructuring in a similar way
*/

const evenNum =[2,4,6,8,10];


const[x,y,z]=evenNum;

console.log(x);
console.log(y);
console.log(z);


/*
Assign Default Values
You can assign the default values for variables while using destructuring.
*/

let oddNum =[1,3,5];

const[a = 9 , b = 7]=oddNum;
console.log(a);
console.log(b);



/*
    In object destructuring, you can pass default values in a similar way.
*/

const person = {
    pName: 'Jack',
    pColor:'black',
    pHeight:5.8,
}

// assign default value 26 to age if undefined
const { pName, pAge = 26} = person;

console.log(pName); // Jack
console.log(pAge); // 26

/*
Swapping Variables
In this example, two variables are swapped using the destructuring assignment syntax.
*/

let color ='red';
let price =10000;

[color,price]=[price,color];//swapping the two variables
console.log(color);
console.log(price);


/*
Skip Items

You can skip unwanted items in an array without assigning them to local variables
*/

const  arrValue =['one','two','six'];

[e,f,,]=arrValue;

console.log(e);
console.log(f);

/*
Assign Remaining Elements to a Single Variable
You can assign the remaining elements of an array to a variable using the spread syntax ...
*/

const[g,...h]=evenNum;

console.log(g);
console.log(h);


//You can also assign the rest of the object properties to a single variable.


const student ={
    stdName:'Issach',
    stdAge:23,
    stdId:315,
}

let{stdName, ...studentInfo}=student;
console.log(stdName);
console.log(studentInfo);