// Instructions
// Difference in Age

// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript

function differenceInAges (ages) {

    let max = Math.max(...ages)
        min = Math.min(...ages)
        difference = max - min
        
    return [min, max, difference]
}


 

// Initials

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
 

// Needle in the hay stack

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
    return "found the needle at position" +
      haystack.findIndex(string => string ==="needle");
    // your code here
  }// i get an error 
 

// Count of positives sum of negatives

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) return [];
    var p = 0,n = 0;
    input.forEach((x) => x > 0 ? p++ : n += x);
    return [p,n];;
}
 

// Remove duplicate

// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript

// My work
// Points
