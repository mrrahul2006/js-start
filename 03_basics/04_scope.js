//Scope 
//1.Block scope
//2.Global scope
//lexicsl function :- inner function can access outer variables 

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

function one(){
    const usernam="ratnakar";
    function two(){
        console.log(usernam)
    }
    two()
}
one()

// ***************interesting*********
console.log(addone(5))
function addone(one){
    return one+1;
}

//addtwo(5):- it will give error because it is function expression and it is not hoisted
const addtwo=function(two){
    return two+2;
}
//7

const addthree=(three)=>{
    return three+3;
}
addthree(5)//8

//Closure 
//:- function remembers variables fromn its outer scope even after outer funvction has finished execution 

function outer(){
    let count =0;
    return function(){
        count++;
        console.log(count);
    }
}

const counter = outer();
counter();
counter();
counter();
counter();

function chai(){
    let name="kumar";
    console.log(this.name);//undefined
}
chai()


// ***************arrow function *****************
const addArrow = (num1,num2)=>{
    return num1+num2;
}

// another method
const arrfun=(num1,num2)=>(5,6);

//***********iiefe********** */
(function ch(){
    console.log("hello");
})();

((name)=>{
    console.log(`hello ${name}`);
})('hitesh')

// javascript execution programming model

// {}:-Global execution context(this=window)
// javascript is single threaded language
// Gobal execution context:- it is created when js file is loaded in browser
// Function execution context:- it is created when function is invoked 
// eval execution context:- it is created when eval() function is called


//Phase of execution
//1. creation phase:- memory is allocated for variables and functions
//2. execution phase:- code is executed line by line    
