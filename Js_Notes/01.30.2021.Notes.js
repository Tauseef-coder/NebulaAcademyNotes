/// create a varibaklethat will take in the operator input such as +,-,*,/.

// function calculate(string){
//     for (var i = 0; i < button.length; i++){
//     if (string == "1+1" ){
       
//     }

//     console.log(string)
// }
// console.log(calculate("1+1"));
// console.log(calculate("2-1"));
// console.log(calculate("10/2"));
// console.log(calculate("1*3"));
// console.log(calcuator("8%2"));
// // gdet this fucntiuon to qwork 

// create a variable for the reulst that will be dispalyed on the calculator screen 

 
/// create  a two varibale that will be for each number entered followed by the opertor 
/// use a switch case on the opertaor to do the calcualtoin / changed to if stataemnt 
/// innter test wont be seporated ... as the data type will be different 

var a, b;

a = 0;
b = 0;
// add event listener need to be passed into parameter 
function Calc(a,b,operator) {

    switch (operator) {
  
      case '+':
        return a + b
        break;
      case '-':
        return a - b
        break;
      case '*':
        return a * b
        break;
    //   case '%':
    //     return a % b
      case '/':
        return a / b
        break;
    
    }
  
  }
  Calc(screenButtons[]);
  // console.log(Calculatrice(5, 5, '+'));
  // console.log(Calculatrice(5, 5, '-'));
  // console.log(Calculatrice(5, 5, '*'));
  // console.log(Calculatrice(5, 5, '/'));
  // //console.log(Calculatrice(5, 5, '%'));



  // iteratire over the string then put then intoa anf array [] 
  // two list of info / data input nunmbers and operator +*/-
// one illterate over number another ittarate over opeator
/// 3 fron the array list then store it in the arry of numbers 