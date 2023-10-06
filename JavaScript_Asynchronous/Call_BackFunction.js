

// function greetings(name,callback){

//     console.log(`welcome .. :) ${name}`);

//     callback();
// }


// function farewell(){
//     console.log("GoodBye...!");
// }

// greetings('issach',farewell);



function foodCooking(callback){

    setTimeout(()=>{
        callback("porata");
       
    },0);

    console.log("food Prepared.. :) ");


}


// let item1 ='porata'
function readyForEating(item1){
  
    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        console.log("index",index);
    }
    console.log("im eating "+item1);
}

foodCooking(readyForEating);