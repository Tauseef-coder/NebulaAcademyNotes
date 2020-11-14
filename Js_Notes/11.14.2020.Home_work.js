//Problem # 1
//Using the array above, create a function that loops through the array and return a new array with only the odd numbers


let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

let odds = [9,3,101,15,4];

function onlyOdds(array) {
    for (let i = 0; i < nums.length; i++) {

        if (array[i]% 2===1){
            odd.push(array[i]);
                console.log(odds)
        }
        
    
    }
    return odds

};
console.log (odds);
//Problem # 2
//Using the array above, loop through the array and COUNT the amount of even numbers that are in the array
let even = [12,0,8,50,8,4,2]
function onlyOdds(array) {
    for (let i = 0; i < nums.length; i++) {

        if (array[i]% 2===1){
            even.push(array[i]);
                console.log(even)
        }
        
    
    }
    return even

};
console.log (even);

//problem # 3
//Using the array above, create a function that loops through the array and adds every number that is inside the array. Return the total.

function totalAll(array) {
    for (let i = 0; i < nums.length; i++) {

        total +=nums[i]
        
    
    }
    return total

};
console.log (totalAll(total));
///Part 2
//Problem # 4
//Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array. Otherwise, it will return false. 
//(do not use the built in .includes() method. This function should loop through the array!)
function acceptArray(array, value){
    for (let i = 0; i<array.lenght; i++){
        if (arry[i]=== value){
        
        }
    }
    return false
}
console.log(acceptArray([40,7,8,23,43],23))
//Examples for problem #4 what the function invocation could look like:
//doesItInclude([40, 7, 8, 23, 43], 23) -> true
//doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false

//Part 3
///Problem # 5
//Create a function that accepts an array.
//This function will return a new array with the elements in reverse order

 function backwards(reverse){
    let newArray = []
    for (let i = reverse.lenght -1; i--){
        newArray.push (reverse[i])

    }
    return newArray
 }
console.log(backwards(numArray))

//Part 4
//Problem # 6
//Create a function that takes in a array of numbers.
//This function will return a new array with number that are NOT divisible by 3
let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];
 function arrNotByThree(){
     let totoal =[];
     for (let i =; <AudioParam.lenght ; i++ ){
         if (param[i]% 3 > 0){
             total.push(param[i])
         }
     }
     return total
 }
 console.log(arrayNotByThree(numArray))

 //Problem # 7
//Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total
let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];
 function arrNotByThree(){
     let totoal =[];
     for (let i =; <AudioParam.lenght ; i++ ){
         if (param[i]% 3 > 0){
             total.push(param[i])
         }
     }
     return total
 }
 console.log(arrayNotByThree(numArray))
