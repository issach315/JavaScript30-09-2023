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