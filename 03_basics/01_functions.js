//a function is a rusable block of code which performs specific task
//Declararion of function 
// function fun_name(parameters){block of code}\
// consrt fun_name = function(parameters){block of code}
function makeTea(){
    console.log(`rour tea will be ready in 5 minutes`)
}
makeTea()
//when we give bracket it means i'm calling the function and when i don't give bracket it means i'm just refercing him


// Parameters and arguments 
function greet(name){
    console.log(name);
}
greet("Rahul")
//name is parameter and rahul is arguement which we passing

// multiple parameters
function employee(name,age,id){
    console.log(`${name} is ${age} years old and his id is ${id}`);
}
employee("ratnakar",30,"abc123")

//return keyword 
function add(a,b){
    console.log(a+b);
}
let result = add(2+3)//NaN
console.log(result)//undefined:- because our function is return =ing nothing so nothng will dstore in result 

//here return keyword comes in scene 
function addd(a,b,c){
    return a+b+c;
}
result = addd(2,5,3)
console.log(result)//10

// what happen if we will write some code after return statement
function sub(a,b){
    return a+b;
    console.log(a-b);//if we right some line of code after the returning statemebnt then that line of code will never execute
}
let resul=sub(6,3);
console.log(resul)

//we can store function in a variable
let myfun=function(a,b){
    return a+b;
}
let res =myfun(2,3);
console.log(res);

// ====>>Hoisting of function<<====
// function declaration is hoisted but function expression is not hoisted
// function declaration
console.log(sum(2,3))//5
function sum(a,b){
    return a+b;
}

// function expression
// console.log(subs(2,3))//error:subs is not defined
// let subs = function(a,b){
//     return a-b;
// }

// Arrow function
//Arrow function is a shorter syntax for writing function expression
// const fun_name = (parameters) => {block of code}
const ad=(a,b,c)=>{
    return a+b+c;
}
console.log(ad(4,45,56))

// another way to write arrow function 
const square =num=> num*num;
console.log(square(5)) 
const area=(a,b,c)=>a*b*c;
console.log(area(2,3,4));

// Anonymous function
//Anonymous function is a function which doesn't have a name
// we can store anonymous function in a variable
let fun = function(a,b,c){
    return a*b*c;
}
console.log(fun(4,54,546))

// Callback function 
//an allback function is a function which is passed as an argument to another function
//in callback a\function callback() shouild be written in main functiom 
function greet1(name,callback){
    console.log(`Hello ${name}`);
    callback();
}
function callme(){
    console.log(`i am call back function `)
}
greet1("ratnakar",callme)

// Higher order function
//A higher order function is a function which takes another function as an argument or returns a function as a result
function multi(a,b,c,fn){
    return fn(a,b,c);
}
function mu(a,b,c){
    return a+b+c;
}
console.log(multi(32,43,54,mu));

// immediate invoked function expression(IIFE)
//IIFE is a function which is invoked immediately after its declaration
(function(){
    console.log(`i am IIFE`)
})()

