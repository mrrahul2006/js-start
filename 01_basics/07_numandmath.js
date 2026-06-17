const score = 800;
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(4));

// precision value
const num =  244.6593045
console.log(num.toPrecision(4))

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'))

// ************** Maths  *******************
// in javascript maths library coming bydefault
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(1.5323894))
console.log(Math.floor(1.9323894))
console.log(Math.min(23,24,5445,436,57))
console.log(Math.min(43,453,56,567,7))

// Mat.random() most important
console.log(Math.random())//it will give between 0 and 1
//if we want to number between o and 10 so multiply with 10
console.log((Math.round(Math.random()*10)+1));


const min = 10;
const max= 40;
console.log(Math.floor(Math.random()*(max-min+1))+min)