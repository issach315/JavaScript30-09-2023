/*
JavaScript Set and WeakSet

The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.

Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc.
 However, unlike an array, a set cannot contain duplicate values.
*/


//Create JavaScript Set

//To create a Set, you need to use the new Set() constructor.

const set1 = new Set();
console.log(set1);// empty set


const set2 = new Set([1,'hello',{status : "true"}]);

console.log(set2);


//When duplicate values are passed to a Set object, the duplicate values are excluded.

const set3 = new Set([1,2,3,2,1]);
console.log(set3);


/*

Access Set Elements
You can access Set elements using the values() method 
and check if there is an element inside Set using has() method.

*/


const set4 = new Set([1,3,4,6,7]);

//You can access Set elements using the values() method
console.log(set4.values());


//You can use the has() method to check if the element is in a Set.
console.log(set4.has(4));


/*
Adding New Elements

You can add elements to a Set using the add() method.
*/

set4.add(10);
console.log(set4);


/*
Removing Elements

You can use the clear() and the delete() method to remove elements from a Set.
*/

set4.delete(1);
console.log(set4);


//The clear() method removes all elements from a Set. 

set4.clear();

console.log(set4);



/*
Iterate Sets

You can iterate through the Set elements using the for...of loop or forEach() method.
 The elements are accessed in the insertion order. 
*/

const set5 = new Set([3,4,5,6,7,10]);
for (const i of set5) {
    console.log(i);
}



/*

JavaScript WeakSet

The WeakSet is similar to a Set. However, WeakSet can only contain objects 
*/

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj);

console.log(weakSet);



//WeakSets Are Not iterable