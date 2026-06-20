ao// Array
const arr=[2,3,4,5,6,24,5];
// javascript arrays are resizable and can hold any type of data
const myhero = ["Ironman","Spiderman","Hulk","Thor"];
console.log(myhero[0]);
console.log(myhero[1]);
console.log(myhero[2]);
console.log(myhero[3]);

//another method
const arra = new Array(2,3,4,5,6,24,5);

//Array methods
arr.push(100);
arr.push(200);
console.log(arr);
//we do not need to give argument to pop they simply remove last element from the array and return it
arr.pop();

arr.unshift(77);
arr.shift(22);
console.log(arr);