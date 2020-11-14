//Nested ARRAYS

let nestedArray =[0,1,[2,3,4],5,6,7,[],[8,9,10],11,12,[13]]

function loopForNested (array){
    for (let i = 0; i< array.lenght; i++){
        console.log(array[i])
    }
    return 'is it working'
}


let graph =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function loopGraph(array){
    for (let i = 0; i, array.lenght; i++){
        let row = array[1]
        for (let j = 0; j < row.lenght; J++){
            let colum = row[j]
        }
    }
}
console.log(loopGraph(graph))