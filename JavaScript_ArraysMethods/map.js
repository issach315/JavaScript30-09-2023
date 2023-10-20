const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt =function(object) {
    newObj = {};
    newObj.name = object.name;
    newObj.netEarning = object.salary + object.bonus - object.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
console.log(newArr);


/*

Returns a new array with elements as the return values from the callback function for each element.
Notes:

map() does not change the original array.
map() executes callback once for each array element in order.
map() does not execute callback for array elements without values.
*/
console.log('________________________________________');

let numbers = [2,3,4,5,6,7,8];

function square(number){

    return number * number ;
}

let square_numbers = numbers.map(square);

console.log(square_numbers);