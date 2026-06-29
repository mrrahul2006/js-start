// JavaScript developers noticed that they repeatedly wrote loops for

// filtering
// transforming
// calculating

// So JavaScript introduced methods that internally perform the loop for you.

// Think of them as:

// Loop + Logic = Method
const num=[32,345,645,7345,5665]
const square = num.map((num1)=>{
    return num1*num1;
});
console.log(square);

const a=[2,334,354,54,54,354]
const squar=a.map((a1)=>{
    return a1*a1;
});
console.log(squar);

let a1=[2,3,4,5,6,7,8,9]
let b=a1.map((b1)=>b1*b1*b1);
console.log(b);


const name=["ratnakar","kumar","sai","rama"]
const upper=name.map((name1)=>name1.toUpperCase());
console.log(upper);

//for objects 
const user=[
{name:"ratnakar"},
{name:"kuamr"},
{name:"kitto"}
];
const names=user.map(name=> {
    return user.name
});
console.log(names)

