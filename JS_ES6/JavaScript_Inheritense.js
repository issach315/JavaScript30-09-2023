/*
Class Inheritance
Inheritance enables you to define a class that takes all the 
functionality from a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods 
and properties of another class.

Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the extends keyword.

*/

class Bike{

    constructor(bikeName,bikeModel,bikePrice){

        this.bikeName=bikeName;
        this.bikeModel=bikeModel;
        this.bikePrice=bikePrice;
        this.bikeCC='160CC';
    }

    welcome(Name) {
        
        console.log(`welcome to ${Name} showroom`);
    }
}

class Honda extends Bike{


}
let honda = new Honda('Honda',2023,129000);

console.log(honda);

honda.welcome('Issach Honda');


// Property And Method overriding.

class Bajaj extends Bike{

    constructor(bikeName,bikeModel,bikePrice){

        super(bikeName,bikeModel,bikePrice);
        this.bikeCC='150cc';
    }
    welcome(Name){
        console.log(`welcome to ${this.bikeName} show Room`);
        console.log(`bikeCC : ${this.bikeCC}`);
    }
}

let bajaj = new Bajaj('Bajaj',2023,130000,'150cc');
console.log(bajaj);
bajaj.welcome('Bajaj');


/*
Uses of Inheritance :

Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.

Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for
cleaner code and easier to maintain.

Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities 
and define other required features.
*/



