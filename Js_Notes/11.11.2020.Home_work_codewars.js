//We want an array, but not just any old array, an array with contents!

//Write a function that produces an array with the numbers 0 to N-1 in it.

//For example, the following code will result in an array containing the numbers 0 to 4:

//const arr = N => [ /* the numbers 0 to N-1 */ ];
//let array =[0,1,2,3,4,]
//function arrfunction(array){
  //return
//}
//console.log (arrFunction);
function squareSum(numbers){
    for(let i = 0; i < numbers.lenght; i++){
      console.log(numbers[i])
      total +=Math.pow(numbers[i],2)
    }
      return total
    }

///Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//setAlarm(true, true) -> false
//setAlarm(false, true) -> false
//setAlarm(false, false) -> false
//setAlarm(true, false) -> true
//function setAarm(employed , vacation){
    function setAlarm(employed, vacation){
        if(employed === true && vacation === false){
          return true
        } else {
          return false 
        }
      }
      ///I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.



///Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return `Hello, ${name} how are you doing today?`
      }
//SQL: return results in a column named greeting

///[Make sure you type the exact thing I wrote or the program may not execute properly]

//We want an array, but not just any old array, an array with contents!
//Write a function that produces an array with the numbers 0 to N-1 in it.
//For example, the following code will result in an array containing the numbers 0 to 4:
const arr = N => {
    let array =[]
    for (i = 0; i<N; i++ ){
      array.push(i)
    }
    return array
  }
  ///This kata is from check py.checkio.org
//You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0. 
//Let's look at a few examples:
//array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
//array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
// input: array of numbers and N representing the index
//output: number -> square root fo the element of at where the N is

// input: array of numbers and N representing the index
//output: number -> square root fo the element of at where the N is

// find the element at N ny using the bracket notation /indexing return the
//Nth power by using the Math.pow() method
// if n is outside of array return -1

function index (array, n){
    if (array[n] === undefined){
      return -1
  }
  return Math.pow(array[n],n)
  }

  //Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//Your task is to make 'Past' function which returns time converted to milliseconds.
function past(h, m, s){
    let seconds =s*1000
    let minutes =m*60000
    let hour = h*3600000
    return hour+minutes+seconds
    //#Happy Coding! ^_^
  }//