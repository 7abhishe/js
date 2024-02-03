//jai shri ram 
// jai shri ram 
const mysym = Symbol("key1");

const jsuser = {
    name: "abhishek",
    age: "18",
    email: "abhi@123.com",
    isloggedin: true,
    lastlogindaya: ["monday", "tuesday"],
    [mysym]: "key1"  // Use the variable mysym as the key without quotes
};

console.log(jsuser.email);
console.log(jsuser);

// jsuser.greeting={
    
// }


