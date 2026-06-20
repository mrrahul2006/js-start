const marvel = ["thor","iron man","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel)
// marvel.flat()
// console.log(marvel)

//push add element in same array but concat add both array and store in another variable
let c = marvel.concat(dc)
console.log(c)

// spread operator
const narr= [...marvel, ...dc]
console.log(narr)

//.flat()
let ar=[1,2,4,43,[34,5,65,57,[23,43,54,6]],43,45,456]
const realanotherarray=ar.flat(2)
console.log(realanotherarray)

console.log(Array.isArray("kumar"))
console.log(Array.from("kumar"))
console.log(Array.from({kumar:"ratnakar"}))//empty array because they dont know which one i have to make array key or value


let score1=1000,score2=1000,score3=3000
console.log(Array.of(score1,score2,score3))