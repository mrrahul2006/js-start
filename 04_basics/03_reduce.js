/* purpose": Reduce an array in to single value
Syntax:
array.reduce((acc,current)=>{
    return acc;
    },initialvalue);
*/ 

const a=[23,43,54,567,5467,784]
const sum=a.reduce((acc,current)=>{
    return acc+ current;
},0);
console.log(sum)

const b=[23,435,54,65,654,43,32,23,23,12]
const s=b.reduce((acc,current)=>{
    return acc>current;

},b[2]);
console.log(s)