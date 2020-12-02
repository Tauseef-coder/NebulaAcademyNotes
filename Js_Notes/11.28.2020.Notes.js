// function greet(llanguage) {
//     welcome = {
//             'russian': 'добро пожаловать',
//             'english': 'Welcome',
//             'czech': 'Vitejte',
//             'danish': 'Velkomst',
//             'dutch': 'Welkom',
//             'estonian': 'Tere tulemast',
//             'finnish': 'Tervetuloa',
//             'flemish': 'Welgekomen',
//             'french': 'Bienvenue',
//             'german': 'Willkommen',
//             'irish': 'Failte',
//             'italian': 'Benvenuto',
//             'latvian': 'Gaidits',
//             'lithuanian': 'Laukiamas',
//             'polish': 'Witamy',
//             'spanish': 'Bienvenido',
//             'swedish': 'Valkommen',
//             'welsh': 'Croeso'}
    
//         if language in welcome.keys():
//             return welcome[language]
//         else:
            
//             return "Welcome"
//             /// g// Welcome!
// // https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
// let welcome = {
//     'russian': 'добро пожаловать',
//     'english': 'Welcome',
//     'czech': 'Vitejte',
//     'danish': 'Velkomst',
//     'dutch': 'Welkom',
//     'estonian': 'Tere tulemast',
//     'finnish': 'Tervetuloa',
//     'flemish': 'Welgekomen',
//     'french': 'Bienvenue',
//     'german': 'Willkommen',
//     'irish': 'Failte',
//     'italian': 'Benvenuto',
//     'latvian': 'Gaidits',
//     'lithuanian': 'Laukiamas',
//     'polish': 'Witamy',
//     'spanish': 'Bienvenido',
//     'swedish': 'Valkommen',
//     'welsh': 'Croeso'}
// function greet(language) {

// for (let key in welcome){
// if (language === key)
//     return welcome[key]
//   }
// }


// ////
// //Job Matching #1
// // https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

// function match(candidate, job) {
//     let need = candidate.minSalary *.9
//     let offer = job.maxSalary
//     if (offer >= need){
//       return true
//     } else {
//       return false
//     }
//     // is this job a valid match for the candidate?
//   }//You have passed all of the tests! :)

// function conutDown(num){
//     for(let i)
// // }


// function countDown(num){
//     //cheicking to see if num is < or = to 0
//     if (num<=0){
//         return 'All Done!';
//     } else {
//         //if num is greater tahn o, console.log num
//     console.log(num);
//     // substracting 1 from num every iterastion
//     num--;
//     countDown(num);
//     }
//     return 'Done'
// }
// console.log(countDown(100))
// // First Iteration
// //num =3 
// //log :3
// //num --
// //num =2 
// // num --
// //num =1


// // num of 10:10+9+8+7+6+5+4+3+2+1=55
// function sumOf(num){
//     let total = 0;
//     for (let i = num; i >0; i--){
//         total += i
//     }
//     return totoal
// }
// console.log(sumOf(10))

fucntion sumRange(num){
    //base case when num hits 1 simply return 1
    if (num == 1){
        return 1;
    }
    return num+ sumRange(num -1);
}
console.log(sumRange(10))//55