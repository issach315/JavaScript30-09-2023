/*
To get the first N number of elements from an array in JavaScript,
there are several approaches that can be taken. Here are a few:

Using the slice() Method
Using a for loop
Using the splice() Method
Using the filter() Method

*/

/*
     input  

     arr =[1,2,3,4,5,6,7] , n=3

     output =[1,2,3];


*/


//Using the slice() Method

let evenNums =[2,4,6,8,10,12,14,16];

let result1 = evenNums.slice(0,4);

console.log(result1); // it retuns the specified index to ending index elements



//for loop for 


let arr1 =[12,3,4,22,66,76,19,10,7],n=6;

let arr2 =[];
for (let i = 0; i< n ; i++) {

   arr2[i]=arr1[i];
    
}
console.log(arr2);


//splice() it is used to add and delete the elements to array


const n1 = 2;

arr2.splice(n1);

console.log(arr2);

const n3 =3;

const result2 =arr1.filter((ele,index)=>index < n3);

console.log(result2);