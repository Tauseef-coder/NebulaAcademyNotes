//Part 1
//let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
//For each problem, use the nested array above and….
//Problem #1
//Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.
//Return the string, 'Done!' at the end

let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
function looping (str){
         for (let i = 0 ; i <str.length;  i++ ){
            console.log(str[i])
       }
        return 'done!'
     }
     console.log(looping(nested));
     
//Problem #2
//Create a function that adds only the ODD numbers inside the NESTED arrays.
//Return the total
function addsOdd(odds){
    for (let i = 0; i < addsOdd.length; i ++){
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
             i = 0; 0 < 5; true; i++
        }
        return "Done!"
    }

//Problem #5
//Create a function that adds that word 'nested' to the end of every nested array.
//Return the new array
fucniton addToArray (array){
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