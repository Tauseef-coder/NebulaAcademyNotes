//1.You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.


const areaOrPerimeter = function(l , w) {
    if (l=== w){
      return l*w
      }else{
        
      } return l*l*w*w
    };
    // Return your answer
  //2. Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. 
  //The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
  function generateRange(min, max, step){
    let arr =[];
   for( let count = min ; count <=max; count+=step){
     arr.push(count)
   }
  return arr
  }//You have passed all of the tests! :)

//3.Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
function hello(name){
    if (name === '' || name === undefined){
        return 'Hello , World!'
    }else {
        name = name.toLowerCase()
        return 'Hello,' + name.charAT(0).toUpperCase() + name.slice(1) + '!'
    }
}
//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y ===0){
      return true
      
    } else{
      return false 
    }
    }


//5. You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   }//You have passed all of the tests! :)