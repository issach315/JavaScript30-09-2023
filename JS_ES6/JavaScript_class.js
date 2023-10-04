/*
A class is a blueprint for the object. You can create an object from the class.

You can think of the class as a sketch (prototype) of a house. It contains
all the details about the floors, doors, windows, etc. Based on these descriptions, 
you build the house. House is the object.

Since many houses can be made from the same description, we can create many objects from a class.
*/

//The class keyword is used to create a class. The properties are assigned in a constructor function.


class Student{

    constructor(stdName,stdId,stdAge)
    {
            this.stdName=stdName;
            this.stdId=stdId;
            this.stdAge=stdAge;
    }

   


    schoolAttinance(){

        console.log(`Your word is absent today date: ${new Date()} Name :${this.stdName} id :${this.stdId} please kindly contact HOD `);
    }
}

//Note: The constructor() method inside a class gets called automatically each time an object is created.

const student1 = new Student("issach","19555A0315",23);
const student2 = new Student("SRK","19555A0343",23);

console.log(student1);
console.log(student2);

console.log('-----------------------------------------');


//It is easy to define methods in the JavaScript class. You simply give the name of the method followed by ().

//Note: To access the method of an object, you need to call the method using its name followed by ().
student1.schoolAttinance();


/*
Getters and Setters

In JavaScript, getter methods get the value of an object and setter methods set the value of an object.
*/


class Bike{

    constructor(bikeName,bikeColor,bikePrice,bikeCC,bikeModel){
        this.bikeName=bikeName;
        this.bikeColor=bikeColor;
        this.bikePrice-bikePrice;
        this.bikeCC=bikeCC;
        this.bikeModel=bikeModel;
    }

    //getter Method
    get bike_Color(){
        return this.bikeColor;
    }

    //setter Method

    set bike_Color(color){
        this.bikeColor=color;
    }


}

let bike1 = new Bike("Honda",'red',130000,'160CC',2022);

console.log(bike1.bikeColor);

bike1.bike_Color='Metalic Gray'

//changing the value of bikeColor property
console.log(bike1.bikeColor);


//A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted. 

//creating car object before declaring the class 

let car1 = new Car();
console.log(car1);// Error : Cannot access 'Car' before initialization


class Car{

    constructor(carName){
        this.carName=carName;
    }
}

 /*
 Benefits of Strict Mode
The use of strict mode:

helps to write a cleaner code
changes previously accepted silent errors (bad syntax) into real errors and throws an error message
makes it easier to write "secure" JavaScript

 */
