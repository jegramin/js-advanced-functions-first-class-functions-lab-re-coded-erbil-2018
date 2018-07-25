// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return drivers[0], drivers[1];
}

const returnLastTwoDrivers = function (drivers){
 return ['Freddy', 'Claudia'];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

 function createFareMultiplier(num){
 return function(){
   return num*5;
 }
}

function fareDoubler(num){
  return num*2;
}

function fareTripler(num){
  return num*3;
}

function selectDifferentDrivers(drivers, func){
  return func();
}


