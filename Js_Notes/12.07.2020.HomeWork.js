//12.05.20 CodeWars Assignment 8
//Due December 7, 2020 5:30 PM


// Multiple of index

// https://www.codewars.com/kata/5a34b80155519e1a00000009

function multipleOfIndex(array) {
    return array.filter((el, idx) => el % idx === 0);
      // good luck
    }
    //You have passed all of the tests! :)



// Convert number to reversed array of digits

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051


function digitize(n) {
    return String(n).split('').map(Number).reverse()
    //code here
  }//You have passed all of the tests! :)


// Sum Mixed Array

// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
    return x.reduce((res,v) => res + parseInt(v),0);
  }//You have passed all of the tests! :)
  // Correctamundo! You may take your time to refactor/comment your solution.


// Sum of differences in array

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
let sumOfDifferences = array =>
  array.length <= 1 ? 0 : Math.max(...array) - Math.min(...array)




// take the derivative

// https://www.codewars.com/kata/5963c18ecb97be020b0000a2







// Total amount of points

// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
