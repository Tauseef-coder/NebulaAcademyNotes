///accessing the last element in the array
/// the name of the method is genre 
let genre=['mystery','romance','drama','thrillers','biography','horror','fiction']
console.log(genre.length); // th light of genre is calculated here 
console.log(genre[4]);// genere @ index 4 is biography 
console.log(genre[genre.lenght -1]); // the last element is fiction in the array  - 1= ficiton 

//// indexof () retunr the elelment you passs inot the method
let months= ['January','July','August','September','']

///.join() convert the elelemt of thr array into a string
let vegetable =['broccoli', 'brussle sprouts']
///.concat() 
///__________________________________________________________________________________________________
// function notes ///

//// default parameters
function defaultArg(param =1){
    return param
}
console.log(defaultArg());
function noMiddleName (firstName,MiddleName,lastName =''){
    return firstName[0] + MiddleName [0] + lastName[0]
}
console.log(noMiddleName('Manami','Ueda'));
console.log(noMiddleName('Manami','chirs','Ueda'));
//*________________________________________________________________
