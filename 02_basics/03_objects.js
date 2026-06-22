//singleton

//object literals
// Object.create => constructor method singleton making
//Almost everything in JavaScript is an object:
// Arrays
// Functions
// Dates
// DOM Elements
// Classes
// APIs


//object is a collecttion of key  value pairs
const mySym = Symbol("key1")

const jsUser={
    "name":"kumar",
    age:20,
    roll:34,
    location:"jaipur",
    email:"kuarrahul",
    lastloginDay:["moday","saturday"]
}

//we can access value from two mwthods first is dot notation and second is bracket notation
console.log(jsUser)
console.log(jsUser.age)
console.log(jsUser["email"])
console.log(jsUser["name"])//when we define key in string then this is only way to access the value of that key


// Adding Properties 
student ={}
student.name="ratnakar"
student.age=20
student.work="student"
student.marks=90
console.log(student)
//output:-{ name: 'ratnakar', age: 20, work: 'student', marks: 90 }

//=> Updating Properties
jsUser.age=50;
jsUser.name="sonu"
console.log(jsUser.age)
console.log(jsUser["name"])

//=> Deleting Properties
delete jsUser.age;
delete jsUser.name;
console.log(jsUser);

//***************** */=>Nested Objects********************************
const myadd={
    name:"ratnakar",
    age:20,
    addr:{
        city:"vadodara",
        state:"Gujrat",
        location:"Parul"
    }
} 
//for accessing inner object elements
console.log(myadd.addr.city)

//Object with Arrays
const user={
    work:"development",
    proj:"real world",
    skills:["HTML","CSS","javascript"]
}
//Access object's array element
console.log(user.skills[1])
console.log(user)

//Object Methods
//Object can store Functions

const person={
    name:"ratnakar",
    per:function(){
        console.log("Ladies and gentleman I'm back")
    }
}
person.per()

// "this"  Keyword:- This refers to the object calling the method

const obj = {
    name:"mayank",
    age:30,
    greet(){
       console.log(this.name)
    }
}
obj.greet()

// Object Keys, Vales and Entries
const o={
    name:"gunnu",
    age:20,
    city:"Patna",
    location:"Dholakpur"
}
console.log(Object.keys(o));
console.log(Object.values(o));
console.log(Object.entries(o));

// Looping through Objects 
const usr={
    name:"kitto",
    age:"15",
    hooby:"reading",
    favfood:"momo"
};

for(let item in usr){
    console.log(item,usr[item])
}
// console.log(item,usr[item]); here we use bracket beacause loop accessinng only keys not directly values
for(let item in usr){
    console.log(item,usr[item]);
}

