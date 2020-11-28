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