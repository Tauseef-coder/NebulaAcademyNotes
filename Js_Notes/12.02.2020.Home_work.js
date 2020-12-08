//Problem #1
//Find the first non-consecutive number
//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}///Excellent! You may take your time to refactor/comment your solution.

//Problem #2
//Can we divide it
//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a

function isDivideBy(number, a, b) {
  return [a,b].every (i=> number %i ===0)
  console.log()
  // good luck
}//Good Job! You may take your time to refactor/comment your solution. 


  ////
  //Problem #3
  //Short Long Short
  //https://www.codewars.com/kata/50654ddff44f800200000007
  function solution(a, b){
    let short = a.length < b.length ? a : b;
    let long = a.length > b.length ? a : b;
    
    return short + long + short;
  }
    // your code here
  //Problem #4
//Check the exam
//https://www.codewars.com/kata/5a3dd29055519e23ec000074
  
function checkExam(array1, array2) {
  let score = 0;
   for (i = 0; i < array1.length; i++){
     if(array1[i].charAt(0) == array2[i].charAt(0)){
       score+=4
     } else if(array2[i].charAt(0)){
       score-=1       }
   }
    if (score < 0){
      return 0
    }
    return score
  }
//You have passed all of the tests! :)
//Excellent! You may take your time to refactor/comment your solution

function checkExam(array1, array2) {
    // good luck
   }

   ///Problem #5
///Reversed Strings
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str) {
    return str.split("").reverse().join("");
}
solution("tauseef");