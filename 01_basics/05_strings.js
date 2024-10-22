const name = "Ayush"
const count =  100
//  console.log(name +   count +"value");
console.log(`Hello my name is ${name} and my value is ${count}`);


const gameName= new String('sandy-aayush-love')
console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("y"));

 const newString = gameName.substring(0,6)
 console.log(newString);
 
 const anotherString = gameName.slice(-12,5)
 console.log(anotherString);

 const newStringOne = "  hitesh  "
 console.log(newStringOne)
 console.log(newStringOne.trim());

 const url = "https://ayush.com/ayush%10acharya"
 console.log (url.replace('10','__'))

 console.log(url.includes('ayush'))

 console.log(gameName.split('-'));
 
 


 
 
 






