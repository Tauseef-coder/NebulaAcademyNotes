//Quarter of the year

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    // Your code here
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3;
    } else {
      return 4;
    }
  }//You have passed all of the tests! :)
  //return math.cel(m%3)
 

//Multiplication Table

https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(number) {
  let result = ''
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      result += `${i} * ${number} = ${i * number}`
      break
    }
    result += `${i} * ${number} = ${i * number}\n`
  }
  return result
}
  // good luck

 

//Enough Space

https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
  let total = on+wait
  if (total <=cap){
    return 0;
  }else{
    return total -cap
  }
  // your code here
}
// //function enough(cap, on, wait) {
//   if (on + wait <= cap){
//     return 0;
//     } else {
//     return (on + wait) - cap;
//     }
//   }



//Reversed Sequence

https://www.codewars.com/kata/5a00e05cc374cb34d100000d

let reverseSeq = n => {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(n - i);
  }

  return result;
};

//Switch it up
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
  let numberObject = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  return numberObject[number];
}



//A Wolf in Sheep's Clothing

https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  if (queue[queue.length -1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     let index = queue.findIndex( (x) => x == 'wolf' );
     return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}