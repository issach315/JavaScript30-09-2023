//Map is similar to objects in JavaScript that allows us to store elements in a key/value pair.

//The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key


const map1 = new Map();// creating the map object by using the map constructor

console.log(map1);



/*
Insert Item to Map

After you create a map, you can use the set() method to insert elements to it.

*/

const map2 = new Map();

map2.set('227',"issach");

console.log(map2);

//You can also use objects or functions as keys.

let obj1 ={}; 
map2.set('person',{age:23,color:'black'});

console.log(map2);

/*
Access Map Elements

You can access Map elements using the get() method. 
*/

console.log(map2.get('227'));// acessing the map elements




/*
Check Map Elements


You can use the has() method to check if the element is in a Map.
*/

console.log(map2.has('student'));// actually this element is not present in map so it returns false
console.log(map2.has('person'));// this is present in the map it returns the true


/*
Removing Elements

You can use the clear() and the delete() method to remove elements from a Map.

The delete() method returns true if a specified key/value pair exists and has been removed or else returns false.

*/


map2.delete("person"); // it reruturns the true value it ti is avli in map 
//person element is deleted 

console.log(map2);


//The clear() method removes all key/value pairs from a Map object. 

map2.clear();

console.log(map2);




/*
Iterate Through a Map
You can iterate through the Map elements using the for...of loop or forEach() method.
 The elements are accessed in the insertion order. 
*/

let map3 =new Map();

//adding map elements 
map3.set('name',"Issach");
map3.set("age",23);



//looping through Map

for (const [key,value] of map3) {
    
    console.log(key+' - '+value);
}



// using forEach method()

map3.forEach(function(key,value){
    console.log(value+' - '+key);

})


/*
Iterate Over Map Keys


You can iterate over the Map and get the key using the keys() method. 
*/

for (const key of map3.keys()) {
    
    console.log(key);
}





/*
Iterate Over Map Values


You can iterate over the Map and get the values using the values() method. 
*/

for (const values of map3.values()) {
    
    console.log(values);
}


/*
Get Key/Values of Map

You can iterate over the Map and get the key/value of a Map using the entries() method. 
*/
let iterable = map3.entries();

console.log(iterable.next().value);
console.log(iterable.next().value);


// finding the map size

console.log("Map Size  = ",map3.size);


