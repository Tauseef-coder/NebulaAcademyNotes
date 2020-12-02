//Problem #1
///Larger Product or Sum
//If the sum of the n largest numbers is higher, return "sum"
//If the product of the n smallest numbers is higher, return "product"
//If the 2 values are equal, return "same"
function sumOrProduct(array, n) {
    let sum = 0
    let product = 1;
     let answer = array.sort((a,b)=> b-a)
     for (let i = 0; i < n -1 ; i++){
       sum += array[i];
     }
     for (let i = 0; answer.lenght -1 >= answer.length -n ; i--){
       producti *=answer[i]
     }
     if (sum >product){
       return "sum"
     }else{
       return 'same '
     }
     //Problem #2

//Simple directions reversal
//In this Kata, you will be given directions and your task will be to find your way back.

function solve(arr){
    const directions =[];
    const roads =[];
    for (let i = 0; i<arr.length; i++){
        const onIdx= arr[i].indexOf('on');
        directions.push(arr[i.slice(0, onIdx)));
            if (driections.loenght> 1){
                for ?(let i = 0; i < driections.length; i++){
                    directions[i]==='Left'
                    directions[i]==='Right'
                }
            }else{
                directions[i]==='left'
            }
    }directions.shift()
    directions.push('begin')
}

//Problem #3
//Life Path Number
//A person's Life Path Number is calculated by adding each individual number in that person's date of birth, untill it is reduced to a single digit number.

//Problem #4
//Form the Largest