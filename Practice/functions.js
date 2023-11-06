function sameProperty()
{
    return " wheels4  4cylinder waterCooling  "
}



function carModel(carSeats , cc,color,gearBox,carName){
    console.log(`${carName} ${carSeats} ${cc} ${gearBox} ${color} ${sameProperty()}`);
}

carModel(4,1200,"red","automatic","a1");
carModel(5,1000,"black","manual","a2");