//Default parameters
function add(name="rahul"){//when we are not passing the argument then default arguemnent will be rahul
    console.log(`my name is ${name}`);
}
add()//rahul
add("ratnakar")//ratnakar

// ===> Rest Operator/Parameters 

function calculatePrice(...num1){
    let total=0;
    for(let i=0;i<num1.length;i++){
        total+=num1[i];
    }
    return total;
}
console.log(calculatePrice(100,32,4,23,23))


const user={
    username:"ratnakar",
    salary:67000,
    position:"developer"
}

function displayUser(employee){
    console.log(`my name is ${employee.username} and my salary is ${employee.salary} and my positioon is ${employee.position}`);
}
displayUser(user)//we can pass object manually

const arr=[323,54,645,756,7,64,42]
function displayArray(ar){
    return ar[4]
}
console.log(displayArray(arr))