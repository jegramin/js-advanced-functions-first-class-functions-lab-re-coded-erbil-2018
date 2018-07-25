// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return ['Sally', 'Bob'];
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

selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  ['Sally', 'Bob'];}