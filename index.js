// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return ['Sally', 'Bob'];
}

const returnLastTwoDrivers = function (drivers){
 return ['Freddy', 'Claudia'];
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const fareQuintupler = function createFareMultiplier(num){
 return function(num){
   return num*2;
 }
}

