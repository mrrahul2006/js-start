//keep only elements that satisfy a condition
//Element -> condition? -> true -> keep  false-> Throw away

// Syntax  array.filter((element,index,array)=>{
    // return copndition
    // });

const num = [23,423,5,,457,234,36,56778,578,79];
const even=num.filter(num1=>num1%2==0);
console.log(even)

const names=["ratnakar","kumar","kitto"]
const name = names.filter(nam=>nam==="ratnakar")
console.log(name)

const students=[
    {name:"ratnakar",marks:89},
    {name:"kumar",marks:8},
    {name:"patel",marks:76},
    {name:"mansi",marks:69}
];

const topper=students.filter(student=>student.marks>=70);
// console.log(`topper students are ${topper}`)
console.log(topper)

// const students=[
//     {name:"Rahul",marks:80},
//     {name:"Aman",marks:30},
//     {name:"John",marks:95}
// ];

// const pass=students.filter(student=>student.marks>=40);

// console.log(pass);