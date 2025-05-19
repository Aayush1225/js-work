// if

// if(condition){

// }


// const temperature = 41
// if(temperature < 50){
// console.log("less than 50");

// }
// console.log(" temperature greater than 50");

  //  < , > , <= , >= , == , != , === , !== ,




//   const score = 200

//   if (score>100){
//     const power ="fly"
//     console.log(`User power :${power}`);
//   }
 //console.log(`User power :${power}`);


 //let balance = 100
 //if(balance>50) console.log("test"),console.log("test2")
 
//  if(balance<50){
// console.log("less than 50");
//  }
//  else if (balance<75){
//     console.log("less than 75");
//  }
//  else{
//     console.log("less than 120");
    
//  }



const userLoggedIn = true 
const debitCard = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
}
if(loggedInFromEmail || loggedInFromGoogle){

    console.log("User logged in")
}