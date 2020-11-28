//Task
//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
//Notes
//Array/list size is at least 2.
//Array/list numbers could be a mixture of positives, negatives also zeroes .


//Problem #1
//Maximum product

ffunction adjacentElementsProduct(array) {
  let numbersInArray=[];
  for (let i = 0; i < array.length -1; i++){
    let integers = array[i]*array[i+1]
    numbersInArray.push(integers)
  }
  return Math.max(...numbersInArray)
  // max product
}//You have passed all of the tests! :)
     // max product
   ///You have passed all of the tests! :)
///Problem #2
function maxGap (numbers){
  let max = 0
  numbers.sort((a,b)=> a-b)
  //your code here
  for (let i =0 ; i < numbers.length -1 ; i++){
    if ((numbers[i+1] - numbers[i]) > max){
      max  = numbers [i+1] - numbers[i]
    }
  }
  return max
}//You have passed all of the tests! :)
//Maximum gap
//Problem #3
//Nth smallest element

//Problem #4
//repeatStr
function repeatStr (n, s) {
    return s.repeat(n);
  }//You have passed all of the tests! :)

//Problem #5
//fakeBin
function fakeBin(num){
    return num.split('').map(a => (a>=5) ?'1' : '0').join('')
    }//You have passed all of the tests! :)