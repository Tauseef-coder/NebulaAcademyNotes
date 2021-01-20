//https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

//Triple Trouble




function tripleTrouble(one, two, three){
    let arry = []; // let arry = "";
    for (let i = 0; i < one.length; i++){
      arry.push(one[i], two[i], three[i]);
      console.log(one[i], two[i],three[i]) 
      //console.log(arry)
    }
    return arry.join("");
    //Solution
   }
   ///8 kyu
//Triple Trouble





function tripleTrouble(one, two, three){ // an array 
    let string = "";
    for (let i =0; i < one.length; i++){
      string += one[i]+ two[i]+three[i]
    }
  
    //Solution
    return string;
   }