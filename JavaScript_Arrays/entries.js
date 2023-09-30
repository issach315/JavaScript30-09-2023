/* The entries() method returns a new Array Iterator
 object containing key/value pairs for each array index.*/

 let letters =["I","S","S","A","C","H"];

let letter =letters.entries(letters);

for (const iterator of letter)
{
    console.log(iterator);
    
}