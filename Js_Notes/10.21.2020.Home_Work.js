let Days= ['Sunday,','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log ( Days);
console.log(Days.length);
console.log ( Days [Days.length]);
console.log (Days [Days.length -4 ]);
console.log (Days[4]);
console.log (Days.pop());
console.log (Days);
console.log (Days.push('Saturday'));
console.log (Days);
Days.unshift('sunday');
//console.log (Days.replace ('Thursday','Friday Juinor'));
let favDay =Days.slice(0,1)
console.log (favDay)

console.log (Days.indexOf('Wednesday'));
let Phone =['iphone','android']
let Laptop =['MacBook','Hp','Dell']
console.log (Phone.concat(Laptop));