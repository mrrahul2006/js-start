// Object Destructing:-a way to unpack values from an object into separate variables.
const user={
    name:"ratnakar",
    age:53,
    add:"muzaffarapur"
};

const {name,age,add}=user;
console.log(name,age,add)

//Renaming While Destructuring
const{name:us,age:num}=user
console.log(us,num)

for(let item in user){
    console.log(item,user[item])
}

// Spread operator 
// copy the object 
const u={
    name:"avhi",
    age:44,
    add:"benguluru"
}
const u2={...u};
console.log(u2)

// Merging Objects
const u3={
    name:"rohit",
    age:49,
    add:"patna"
}
const u4={...u,...u3}
console.log(u4)

// Shallow Copy vs Deep Copy
//:- Shallow copy shared references but pointing shame objects element in heap memory
const u5={
    name:"avhi",
    age:44,
    add:"benguluru"
}
const u6={...u5};
console.log(u2)
//:-won't effect original value it makes another shame object in heap but diff var

const deepcopy = structuredClone(u);

// Object.freeze();- Makes object immutable

const a={
    name:"ratnakar",
    age:20,
    limit:30
}
Object.freeze(a);
a.name="rahul";
console.log(a.name)//Still the name will ratnakar

// Objects.seal():- Can modify existing properties but cannot add/delete

// Cmputed Properties
// Dynamic keys\
const key="email"
const b={
    [key]:"kumar@yes",
    name:"rahul",
    age:"14",
    addr:"vadodar"
}

console.log(Object.values(b))


// ***********Constructor Function ************
function print(name,age,add){
    this.name=name,
    this.age=age,
    this.add=add
}
const u1= new print("rahul",20,"muz.")
// Equity problem 
const a1={}
const a2={}
console.log(a1===a2)//false due to difference memory address

// example practice
const employee={
    name:"ratnakar",
    age:20,
    department:"it",
    address:{
        city:"muzaffarpur",
        satate:"bihar"
    },
    skills:[
        "java",
        "python",
        "flask"
    ],
    info(){
        return `${this.name} works in ${this.address.city}`;
    }
};
console.log(employee.info())
