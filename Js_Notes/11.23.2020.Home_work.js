let studentObject1 = {
    name: 'Tim',
    id: 1,
    age: 22
    } 
    let studentObject2 = {
    name: 'Lisa',
    id: 2,
    age: 19
    }
    //problem #1
 //Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old'
 
 function student(obejct){
     let name = object.name
     let age = object.age
         return `${name} is ${age} years old`
     }
 console.log(student(studentObject1))
 console.log(student(studentObject2))
 //Problem #2
 //Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
 //if they are 21+, return the string, 'welcome, (name)!'
 //if not, return the string, 'try again in a couple years'
 function twentyoneAbove(aboveA)
 let person = aboveA.name
 let age = aboveA.age
    if (age >= 21){
     return `Welcom,${person}!`
 } else {
     return `try again is a couple years`
 }
 console.log(twentyoneAbove(studentObject1, studentObject2))

 //Problem #3
 //create a function that returns the keys in an array
 function 
 console.log(object.key(studentObject1))
 //create a funciton that return the values in an array
 console.log(object.key(studentObject2))
 //Problem #4
 //Create a function that deletes the 'id' key value pairs

function del(keyVlaue){
    del keyVlaue.id
}
console.log(del(studentObject1));
 
 //Problem #5
 //create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
 //This function will add a new birthdate key value pair to the object
 function adds (object, birthdate){
     object['DOB']= birth
     return object
 }
 console.log(students(studentObject1,'10\04\1990'));
 console.log(adds(studentObject2, `11\09\1998`))