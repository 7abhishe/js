//array

// resizeable, hetrogenouus data types, zero-based indexing,shallow copies
const myArr=[1,23,13,12];
console.log(myArr);
myArr.push(9);
myArr.pop();
myArr.unshift(4);
myArr.shift();
console.log(myArr);
// convert an array into an string by using join function of the values

const newarr=myArr.join();
console.log(typeof(newarr))
console.log(newarr);

console.log("A",myArr);
const nw1=newarr.slice(1,3);
//const nw2=newarr.splice(1,3)
console.log("B",nw1);
//console.log("C",nw2);

