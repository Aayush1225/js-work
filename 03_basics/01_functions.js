function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");

    
}
//sayMyName()



// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
    
// }
// addTwoNumber(4,3)


function addTwoNumber( number1,number2 ){
      return number1 + number2
    
}
const result = addTwoNumber(4,3)
console.log( result);

//console.log("Results: " result );



// function loginUsermessage(username){
//     return `${username} just logged in`
// }

// //console.log(loginUsermessage("Ayush"))
// console.log(loginUsermessage())



function loginUsermessage(username){
    //if(username == undefined)       =====>>  42 and 43 line are same functioning.
    if(!username )
        {
        console.log("Please enetr a user name");
        return

        
    }
    return `${username} just logged in`
}

//console.log(loginUsermessage("Ayush"))
console.log(loginUsermessage("ayush"))



