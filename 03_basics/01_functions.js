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
//console.log( result);

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
//console.log(loginUsermessage("ayush"))


function calculateCartPrize(val1, val2, val3 ,...num1){
    return num1  
    
}
//console.log(calculateCartPrize(200,300,400,500,600))


let user = {
    username:"Ayush",
    salary:3000

}

function userHandle (anyObject){
    console.log(`user Name is ${anyObject.username} and salary is ${anyObject.salary}`);
    
}
//userHandle(user)
userHandle({
    username:"Puzan",
    salary:10000
})

 const myNewarray =[200,300,400,]

 function returnSecondValues(anyarrays){
    return anyarrays[2]
 }
//  console.log(returnSecondValues(myNewarray));
console.log(returnSecondValues([400,500,600]));
 



