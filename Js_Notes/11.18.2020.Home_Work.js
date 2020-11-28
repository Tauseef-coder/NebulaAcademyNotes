//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value

function litres(time) {
  // give every hour 0.5 liters of fluid. folllow by rouding it down . 
  //then return the result 
  // for each hour 
  return Math.floor(time /2);
}

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.
let marks=["75","90","88","100","70"];
function getAverage(marks){
  let sum = 0
  for (let i = 0; i < marks.length; i++){
    let average = sum += marks[i]
   return Math.round(average)
  }
  //TODO : calculate the downwar rounded average of the marks array
}



function flip(a){
  return a.reverse(); 
}


//reverseWords("The greatest victory is that which requires no battle")



///function reverseWords(str){
  
  let array = str.replace(' ', ',').split(',')
  let rev = array.reverse()
//    rev.splice(',');
  return rev.join()
 // reverse those words
}
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let inverse =[]
  for (let i =0 ; i < array.length; i++){
    let newNum =array[i] * -1
    inverse.push(newNum)
  }
   return inverse ;
}//You have passed all of the tests! :)