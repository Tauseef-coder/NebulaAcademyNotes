//define a varibale name and assgn you name to it 
var seef = "Tauseef";
console.log (seef);
//Create a function that returns your name

function nameFunction (){
    
    console.log('Tauseef');
}
nameFunction();
//Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
function parameters (num1 , num2){
    return num1+num2
}
console.log (parameters (2,2));
//Create a function that returns the type of any argument that is being called in the function
//type(400) //=> 'number'

//type('hi') //=> 'string'

function Today(){
    console.log('','Today life happens');
    return `hi ${Today}`
}

Today('hi');/// i need more clarity on this section 
let fruits =['apple','oragne','peach','lemon','plum','grape','watermelon'];
//Using the array above, create a funciton that returns the 4th element in the array.
//function fruits(eachFruits){
  // return `The 4th fruit is ${eachFruits}`
//}
//console.log (fruits(eachFruits[4]));        
//Using the array above, create a funciton that returns the 4th element in the array.

console.log(fruits[4]);
//Create a function that returns only the last element in the fruits array
function lastElementOfFruits(watermelon){
    return watermelon[watermelon.length -1 ]

}

console.log (lastElementOfFruits(fruits), 'last Elempent is Watermelon');
//console.log(fruits[6]);
//Create a function that returns [peach', 'lemon', 'plum', 'grape']
console.log (fruits[2]);
console.log (fruits[3]);
console.log (fruits[4]);
console.log (fruits[5]);//this is the long way i believe am missing a method that would console.log example(2,3,4,5); like push method 
//Create a function that adds another furit to the end of the array and returns the new array
console.log (fruits);
fruits.push();
console.log (fruits.push('banana'));/// here the .push method was used , i am getting a numeral insted of it adding to my array 
console.log (fruits);/// never mind the previous commend afer loggin the arry i notice it was inside.
//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
let fruits2 = ['apple','oragen','peach','lemon','plum','grape','watermelon'];
console.log (fruits2);
//var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
let names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
//Using the array above, create a fucntion that returns the string, 'Hello Maurice and Chelsea!'
//console.log(names('Hello'));
//console.log (names[Mauriece]);
/////
function name (girlsBoys){
    console.log(girlsBoys)
    return `happy Monday${girlsBoys}`
}/// neeeds to be completed  ///