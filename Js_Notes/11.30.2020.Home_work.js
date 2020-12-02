///Recursive Replication
/// https://www.codewars.com/kata/57547f9182655569ab0008c4
function replicate(times, number) {
    let result = []
    if (times <= 0){
      return[];
    }
    if (times > 0){
      result.push(number)
      times--
      result = result.concat(replicate(times, number))
    }
    return result
      
  }

///Factorial Factory
/// https://www.codewars.com/kata/528e95af53dcdb40b5000171
function factorial (n){
    if (n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

//Reverser
//https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

// Problem #3
// Life Path Number
// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0
function lifePathNumber(dateOfBirth) {
    let DOB = dateOfBirth.split('-')
    let year = DOB[0]
    let month = DOB[1]
    let day = DOB[2]
    let y = (year - 1) % 9 + 1
    let m = (month - 1) % 9 + 1
    let d = (day - 1) % 9 + 1
    let total = y + m + d
    return (total -1) % 9 + 1
}
console.log((lifePathNumber("1879-03-14"))
    //6

//Sum ALL the arrays

/// https://www.codewars.com/kata/5594463eaf1701909c0000d4
function arraySum(arr){
    let result = 0;
    for(let i= 0; i < arr.length ; i++){
        let element = arr[i];
        if(Array.isArray(element)){
            for(let j = 0; j< element.length ; j++){
                result += element[j]
            }
        }
    }
}