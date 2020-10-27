//define a varibale name and assgn you name to it 
var seef = "Tauseef";
console.log (seef);
let chels ="chelsea";
//Create a function that returns your name
///Using the variable name** added in class 

function nameFunction (){
    console.log('Tauseef');
    //return 'Tauseef';/// this a manual way .
    ///console.log('Tauseef'); needs to go before return .
        return 
}
//nameFunction();
//console.log(nameFunction(Seef));
console.log(nameFunction(chels));
///// the differecn beteween let and var is that you cannot access variable afte its declared globally

////fucntion myName (fullName){
   // return fullName;
//}
//console.log(myName(name));
///??
//function adding (num1, nmu2){
    //return num1+num2
//}
//console.log(addingv(4,10));

//let randomNames =['anitria','Chels','Daja']{
    //return typeof 'jasmine'
        
    //tyeof///
    //retrun random1 +random2
//}
//function namesRandom(names){
    //return typeof names
//}
//console.log(namesRandom('Jasmine'));///string
//console.log(namesRandom(19));/// number
//console.log(namesRandom(true));
/////
//function fourthElement(singleFurits){
//    return ` the fourht fruit is ${singlrFruit}`
//}
let fruits =['apple','oragne','peach','lemon','plum','grape','watermelon'];

//console.log(fourthElement(fruits[3]));
////console.log(fruits.pop());

//function lastFruit(juice){
   // console.log(jucie)
//}
//console.log(lastFruit(fruits))

function addFruit(fruits){
    fruits.push('berry')
    return fruit
}
console.log(addFruits(fruits));
///////// problem 5
var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
/// any time a function is created it need this skelliton 
function hiMaurice(studentNames){
    console.log(studentNames)
    console.log(studentNames[1])
    console.log(studentNames[2])
    /// name is the parameters)
    return 'hello'+studentNames[1]+ ''+ studentNames[2] +'1'

}/// involking the function
console.log(hiMaurice(names));

function welcome(names){
    console.log(names[1])
    console.log(names[5])
    reutrn `hi ${names}`
}
console.log(welceome(names));


function welcome(){
    console.log(name[0]);
    console.log(name[5]);
    return `hi ${names[0]}and ${names[5]}!`
}
console.log(welcome(names))
