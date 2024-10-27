//  singlrton
Object.create

// object literals

const mySymbol = Symbol("key1")
const jsUser = {
    name: "AAyush",
    [mySymbol]:"mykey1",
    id : 2,
    age :17,
    email:"jduedu@gmail.com",

}
console.log(jsUser['id']);
console.log(jsUser[mySymbol]);

jsUser.email = "ayush@d.com"
//Object.freeze(jsUser)
jsUser.email = "rfhhurfurhfur"

console.log(jsUser);



jsUser.greeting = function(){
    console.log("hello js user");

    
}
 console.log(jsUser.greeting());

 jsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
 }
 console.log(jsUser.greeting2());




