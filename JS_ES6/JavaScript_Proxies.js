/*

In JavaScript, proxies (proxy object) are used to wrap an object and 
redefine various operations into the object such as reading, insertion, validation, etc.
 Proxy allows you to add custom behavior to an object or a function.

*/

/*
Creating a Proxy Object
The syntax of proxy is:

new Proxy(target, handler);
Here,

new Proxy() - the constructor.

target - the object/function which you want to proxy

handler - can redefine the custom behavior of the object


*/

let student1 ={
    age:23,
    name:'issach',
}

const handler ={

    get:function (object,property) {
        return object[property]?object[property]:'property does not exist';
    }
}

const proxy = new Proxy(student1,handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);


//You can also pass an empty handler. When an empty handler is passed, the proxy behaves as an original object. 


//Proxy provides two handler methods get() and set().



//--->  get() handler

//The get() method is used to access the properties of a target object.

//the get() method takes the object and the property as its parameters.

const handler1={

    get(object,property){
        return object[property];
    }
}

const proxy1 = new Proxy(student1,handler1);

console.log(proxy1.name);



// ----> set() handler
//The set() method is used to set the value of an object. For example,


let setNewValue =   {

    set:function(object,property,value){
        object[property]=value;
        return;
    }
};

//setting new proxy
let person = new Proxy(student1,setNewValue);
//setting new key/value
person.stdClass='10th';
console.log(person.stdClass);





let student2 ={
    age:23,
    name:'rocky',
}


const handler2 ={

    get(student2,property){

        if(property=='name'){

            return student2[property]
        }
        else{

            return 'Not Allowed'
        }
    }
}
const proxy3 = new Proxy(student2,handler2);

console.log(proxy3.name);