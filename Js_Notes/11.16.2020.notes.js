// using the nested array above (nestedArr), remove the first element in the nested arrays
// using the nested array above (nestedArr), add 's' to every word in the elements inside the array and and in the nested arrays
let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
function removeFirstElement(nestedArr){
    for (let i = 0; i < nestedArr.length; i++){
        let element = array[i]
        if (Array.isArray(elment)){
            for (let j= 0; j< element.length; j ++){
                element[j].shift()
            

            }
            
        }

    } return nestedArr
}
console.log(nestedArr)
// using the nested array above (nestedArr), add 's' to every word in the elements inside the array and and in the nested arrays