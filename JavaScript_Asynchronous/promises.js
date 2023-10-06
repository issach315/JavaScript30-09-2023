
// let countValue = new Promise(function (resolve, reject) {
//     resolve(`qwertyuiop`);
// });

// // executes when promise is resolved successfully

// console.log(countValue);

// countValue
//     .then(function successValue1() {
//         console.log("2345678");
//     })
//     .then(function successValue() {
//         console.log("You can call multiple functions this way.");
//     })
//     .catch(()=>{

//     })

// function add(a, b) {
//     return a + b
// }
// console.log(add(2, 6));


async function f() {
    console.log('Async function.');
    return "await";
    // return await Promise.reject(false);
}

console.log("manu");
console.log(f());

// f().then(function (result) {
//     console.log(result)
// }).catch(() => {
//     console.log("error");
// }).finally(() => {
//     console.log("fianally");

// })

