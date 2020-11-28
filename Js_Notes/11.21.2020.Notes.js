// Problem #6
// Find the difference in age 
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

// let differenceInAges = (ages) => {
//     ages.sort((a, b) => a - b);
    
//     return [ages[0], ages[ages.length - 1], ages.pop() - ages.shift()];
//   };//You have passed all of the tests! :)


  
    
//   function differenceInAges(ages){​​​​​​​
//     let diffInAge= []
    
//    let youngest = Math.min(...ages)
//    let oldest = Math.max(...ages)
//    let difference= oldest - youngest
   
//    diffInAge.push(youngest, oldest, difference)
   
//    return diffInAge
    
//   }​​​​​​​
  
  
  
  // diffInAge.push(Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages) ).
  
  let iden = {
    name : "Tauseef",
     age : 33,
     city : "wheatley heihgts"
  }
  
  function loopObjKeys(object){
    console.log(object.age)
    return object.age++

  }
  console.log(loopObjKeys(iden)) 
  console.log(iden)