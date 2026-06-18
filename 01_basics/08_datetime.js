// creating a date object 
let date  = new Date();
console.log(date)//2026-06-18T04:27:39.925Z

//for display only current date and day
let today = new Date();
console.log(today.toDateString());

//for display only curent time
let time = new Date();
console.log(time.toLocaleTimeString("en-IN"));

// //manually creating date
let d1 = new Date("2026-02-02");
console.log(d1.toLocaleTimeString("en-IN"));

let d2 = new Date(2026,3,24);
console.log(d2);

//get individual date and time components
//when we find the current year we will use getFullYear() other wise just getDate()
let d3=new Date();
console.log(d3.getFullYear());
console.log(d3.getMonth());
console.log(d3.getDate()); 
console.log(d3.getDay());

// get hours,minutes,seconds and miliseconds
console.log(d3.getHours());
console.log(d3.getMinutes());
console.log(d3.toLocaleTimeString("en-IN"));

//${d3.getHours()}:${d3.getMinutes()}:${d3.getSeconds()  }`
d3.toDateString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'string'
})
console.log(d3.toDateString())