// Instructions
// What is between?

// https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {
    // your code here
    let arr=[]
    for (let i = a; i , <= b; i++){
        arr.push(i)
    }
    return arr
  }


// Tip Calculator

// https://www.codewars.com/kata/56598d8076ee7a0759000087

function calculateTip(amount, rating) {
    let x = rating.toUpperCase();
    
    switch (x) {
        case "EXCELLENT":
          return Math.ceil(amount * 0.2);
        
        case "GREAT":
          return Math.ceil(amount * 0.15);
        
        case "GOOD":
          return Math.ceil(amount * 0.1);
        
        case "POOR":
          return Math.ceil(amount * 0.05);
        
        case "TERRIBLE":
          return Math.ceil(amount * 0);
        
        default:
          return "Rating not recognised"
    }
  }
 

// Draw Stairs

// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n){
    let result = [];
    for (let i = 0; i < n ;i ++){
        result [i] = `${' ' .repeat(i)}I`
    }
    return result.join('\n')
}
// Remove String Spaces

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
function noSpace(x){
    var output ='';
    for (i=0; i<=x.length-1; i++) {
      if (x[i] !== ' ') {
        output = output + x[i];
      }
    }
    return output;
  }
  
 
return x.split(''). join('')
// LeetCode Problem:

 

// TwoSum:

// https://leetcode.com/problems/two-sum
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
    if(array.includes(target - array[i])){
    let j = array.findIndex((element) =>element == (target - array[i]));
    return [i,j];
    }
    }
    }

// My work
// Points
