//Part 1
//let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
//For each problem, use the nested array above and….
//Problem #1
//Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.
//Return the string, 'Done!' at the end

let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
function looping (str){
         for (let i = 0 ; i <str.length;  i++ ){
             let num = str[i]
             if (array.isarray(num)){
                 for(let k = 0;  k < num; k++){

             }
            console.log(str[i])
       }
        return 'done!'
     }
     console.log(looping(nested));
     
//Problem #2
//Create a function that adds only the ODD numbers inside the NESTED arrays.
//Return the total
function addsOdd(odds){
    let total = 0;
    for (let i = 0; i < addsOdd.length; i ++){
        let prince = purple[i];
        for (let j = 0; j < prince.length; j++){
            let rasberry = prince[j]
            if (raspberry % 2== 1){
                total +=raspberry
            }
        }
        console.log(odds[i])
    }
    return "the total"
}
console.log(addsOdd(nested))
//Problem #3
//Create a function that logs only the EVEN numbers in the array and in the nested arrays.
//After logging every even number, return, 'Done!'
function logEven(even){
    for (let i = 0; i < logEven.length; i++){
        let element = even[i]
        if (array.isarray(element)){
            for (let j= 0; j < element.length; j++)
           // let adding = element[j]
            if (adding % 2 === 0){

            }
        }else if (element % 2 === 0 )
        console.log(logEven[i])
    }
 
   return "Done!" /// i get a undefined here :/ 
}
console.log(logEven(nested))
//Part 2
//let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
//For each problem, use the nested array above and….

//Problem #4
//Create a function that logs every word in the array and the nested arrays.
//Return 'Done!' at the end
let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
function iterateArrays (array){
        for (let i = 0; i < array.length; i++){
             let full = array [i]
             if (array.isarray(full)){
                 for(let j = 0; < full.length; j++){
                    let nest = full[j]
                    console.log(nest)
             }
             
        }
        return "Done!"
    }

//Problem #5
//Create a function that adds that word 'nested' to the end of every nested array.
//Return the new array
function addToArray (array){
    for (let i =0; i< array.length; i++){
        let aarrayElement = array[i]
        if (array.isarray(arrrayElement)){
        arrrayElement[j].push('nested')
        }
    }
    return array
}
console.log(addToArray(array))
//Problem #6
//Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays.
//Return 'Done!' at the end
function doesAexist(array{
    for (let i=0 ; i <array.lenght; i++){
        let element = array[i]
        if (array.isarray(element)){
            for(let j= 0; j <element.length; j++ ){
                if (InestedEleemnt.includes('a')){
                    console.log(nestedElement)
                }
            }
        } else if (element.includes('a')) {
            console.log(element)
        }   
    }
    
}return "Done!"
console.log(doesAexist(nestedArr))
//function loopGraph (array){
    ////for (let i = 0; i < array.length; i++){
        //let row = array[i]
        ////let column = row[j]
            ///console.log(column)
        ////}
//}
//console.log(loopGraph(graph))
//Problem #7
//Create a function that logs every word that has a length of 4 in the array and in the nested arrays.
//Return 'Done!' at the endgit add
function lengthOfFour(array){
    for (let i = 0; i< array.length; i++){
        let element =array[i]
        if (array.isarray(element)){
            for(let j = 0; j < element.length; J++){
                let nestedElement = element
            }
        }
    }
}