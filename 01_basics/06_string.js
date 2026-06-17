const name = "rahul"
const repo =50
// console.log(name+repo+"value");

// backticks => ``

console.log(`hello my name is ${name} and my repo is ${repo}`)

// another declaration of string

const gameName = new String(`ratnakar`)
console.log(gameName[4])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4);
console.log(newString)

// in slice method we cn use negative values also positive negative will print from last index
const anotherString = gameName.slice(-6,4)
console.log(anotherString)

// .trim() for space removal
const nname = "    kumar   "
console.log(nname.trim())

// .replace() any char with any char
const url = "kuma--rrahul--@gmail.com"
const murl=url.replaceAll("-","")
console.log(murl)

// .includes() method search that word is in the 
console.log(url.includes(`kumar`))

// .split()

console.log(url.split('-'))
