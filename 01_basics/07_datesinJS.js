// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023 , 2 ,7) 
let myCreatedDate = new Date("2023-01-18") 

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday: "narrow",
    
})








