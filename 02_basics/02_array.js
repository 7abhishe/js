const marvel_hero=["'spiderman","ironman","superman"]
const dc_hero=["superbase","flash","batman"]

marvel_hero.push(dc_hero)
// console.log(marvel_hero)
// console.log(marvel_hero[3][1]). concat and push both are same;

const all_hero=marvel_hero.concat(dc_hero)

console.log(all_hero)

const real_it=[1,2,3,,4,5,[2,3,,45],[2,3,4]]

const another_real=real_it.flat(Infinity)
console.log(another_real)

//conversion of an string into an array thsi mostly happens in the case of the scrabping of the browser of thedata.

console.log(Array.isArray("Abhishek")) //this give false answer u know why it will.

console.log(Array.from("Abhishek"))// conversion of it happening

console.log(Array.from({name:"Abhishek"}))


//++++++++++++++++++++++++++++++++++++++++++++++
//now we are learning about the object mostly we need to study about all thes
let s1=100
let s2=120
let s3=240
console.log(Array.of(s1,s2,s3))
