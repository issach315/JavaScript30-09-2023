/*
We use the async keyword with a function to represent that the function is an asynchronous function.
 The async function returns a promise.

*/

/*

Syntax :-

async function name(parameter1, parameter2, ...paramaterN) {
    // statements
}

*/


// async function hello(){
//     console.log("async function...!");

//     return Promise.resolve(1);
// }

// //Since this function returns a promise, you can use the chaining method then()

// hello().then(function(result){
//     console.log(result);
// });

// the hello() function is resolved and the then() method gets executed.



/*
JavaScript await Keyword

The await keyword is used inside the async function to wait for the asynchronous operation.

The use of await pauses the async function until the promise returns a result (resolve or reject) value.



The syntax to use await is:

let result = await promise;
*/


let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject('promise rejected')}, 3000);
});

// async function asyncFun(){

//     let result1 =await promise;

//     console.log(result1);

//     console.log("hello");
// }

// //calling asyncFun
// asyncFun();


//This can be useful if there are multiple promises in the program. 


//Error Handling

/*While using the async function, you write the code in a synchronous manner. 
And you can also use the catch() method to catch the error.*/

async function asyncFunc1() {
    try {
        // wait until the promise resolves 
        let result = await promise; 

        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}

// calling the async function
asyncFunc1(); // Promise resolved


/*
Benefits of Using async Function

1 The code is more readable than using a callback or a promise.
2 Error handling is simpler.
3 Debugging is easier.

*/