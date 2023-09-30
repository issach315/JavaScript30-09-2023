let days = ['Monday','Wednesday','Thursday','Friday','Satrday']; // declaring the array

days.splice(1,0,'Tuesday');
days.splice(0,0,'Sunday');
console.log(days); // the splice method modifies an array adds removes or replaces elements

/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, ....itemN)
*/

for (const day of days)
 {
    
    console.log(day)
    
}