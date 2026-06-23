//Scope 
//1.Block scope
//2.Global scope
if(true){
    let a=30
    const b=49
    var c=90
}
// console.log(a) error
// console.log(b) error
console.log(c)//90

let a=40
if(true){
    let a=244;
    console.log(`inner value ${a}`); //244
}
console.log(`outer value ${a}`); //40
