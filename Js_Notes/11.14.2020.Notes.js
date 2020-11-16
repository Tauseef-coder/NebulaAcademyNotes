//Nested ARRAYS

//clet nestedArray =[0,1,[2,3,4],5,6,7,[],[8,9,10],11,12,[13]]

//function loopForNested (array){
   // for (let i = 0; i< array.lenght; i++){
   //     console.log(array[i])
   // }
   // return 'is it working'
//}


//let graph =[
   // [1,2,3],
    //[4,5,6],
  //  [7,8,9]
//]

//function loopGraph(array){
   /// for (let i = 0; i, array.lenght; i++){
        ////let row = array[1]
        //for (let j = 0; j < row.lenght; J++){
        //    let colum = row[j]
        //}
   // }
//}
///onsole.log(loopGraph(graph))
//////

//using the netedarrahy abive , log every number and the nested array
//let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]
//function loopNested(array){
    //for (let i = 0; i< nestedArray.length; i++){
   /// }
//}
////console.log()
// a sample 2-D array 
let nestedArray = [0, 1, [2, 3, 4], 5, 6, 7, [], [8, 9, 10], 11, 12, [13]]
function bobArray(array){
    for (let i = 0; i < array.length; i++){
        let nestedArray =array[i]
        if (Array.isArray(nestedArray)){
            for(let j = 0; j< nestedArray.length; j++){
                console.log(nestedArray[j])
            }

        }else{
            console.log(nestedArray)
        }

    }
return "am learning"
}
console.log(bobArray(nestedArray))